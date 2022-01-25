import {v4 as uuidv4} from 'uuid';
import type { BCMSMediaParsed } from '@becomes/cms-client/types';
import type { BCMSMostImageProcessorProcessOptions } from '@becomes/cms-most/types';

function optionsToString(options: BCMSMostImageProcessorProcessOptions) {
  const ops: string[] = [];
  if (options.position) {
    ops.push(`_p${options.position}`);
  }
  if (options.quality) {
    ops.push(`_q${options.quality}`);
  }
  if (options.sizes) {
    if (options.sizes.auto) {
      ops.push('_sa');
    } else if (options.sizes.exec) {
      ops.push(
        `_se${options.sizes.exec
          .map((e) => `${e.width}x${e.height ? e.height : 'a'}`)
          .join('-')}`,
      );
    } else if (options.sizes.steps) {
      ops.push(`_ss${options.sizes.steps}`);
    }
  }
  return ops.join('');
}

export interface BCMSImageComponentFunction {
  (props: {
    media: BCMSMediaParsed;
    options?: BCMSMostImageProcessorProcessOptions;
  }): string
}

export const createBcmsImageComponent: BCMSImageComponentFunction = ({
  media,
  options,
}) => {
  const basePath = '/bcms-media';
  if (
    !options ||
    (!media.name.endsWith('.jpg') &&
      !media.name.endsWith('.jpeg') &&
      !media.name.endsWith('.png'))
  ) {
    return `<img src="${basePath}${media.src}" alt="${media.alt_text}" />`;
  }
  const optionString = optionsToString(options);
  const srcParts = media.src.split('.');
  const srcMain = srcParts.slice(0, srcParts.length - 1).join('.');
  const srcExt = srcParts[srcParts.length - 1];
  const id = uuidv4();
  const set = `
  <source data-bcms-image-s1 srcset="${basePath}/${optionString}${srcMain}_@sizeIndex.webp" />
  <source data-bcms-image-s2 srcset="${basePath}/${optionString}${srcMain}_@sizeIndex.${srcExt}" />
  <img id="${id}_i" data-bcms-image src="${basePath}${media.src}" />
  `

  return `
  <picture id="${id}">
    ${set.replace(/@sizeIndex/g, '0')}
  </picture>
  <script>
    (function () {
      const el = document.getElementById('${id}');
      console.log(el);  
      if (!el) {
        return;
      }
      const parent = el.parentElement;
      if (!parent) {
        return;
      }

      function closest(_width, set) {
        console.log({_width, set})
        const width = _width * window.devicePixelRatio;
        let delta = 100000;
        let bestI = 0;
        const wids = set ? set : widths;
        for (let i = 0; i < wids.length; i = i + 1) {
          let d = width - wids[i];
          d = d < 0 ? -d : d;
          if (d < delta) {
            delta = d;
            bestI = i;
          }
        }
        return bestI;
      }
      window.setTimeout(() => {
        const srcsets = [
          '${basePath}/${optionString}${srcMain}_@sizeIndex.webp',
          '${basePath}/${optionString}${srcMain}_@sizeIndex.${srcExt}',
        ]
        const options = ${JSON.stringify(options)};
        const parentWidth = parent.offsetWidth;
        const index = closest(parent.offsetWidth, options.sizes.exec.map(e => e.width));
        el.children[0].setAttribute('srcset', srcsets[0].replace(/@sizeIndex/g, index));

        console.log(el.children[0])
        el.remove();
      }, 200)
    } ())
  </script>
  `;
}
