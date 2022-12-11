import '../styles/_main.scss'
import { BCMSImageConfig } from '@becomes/cms-most/frontend';

BCMSImageConfig.cmsOrigin = 'https://cms.vajaga.com';
BCMSImageConfig.publicApiKeyId = '63753b269fab4733bcf04b9b';
BCMSImageConfig.localeImageProcessing = false;

export default defineNuxtComponent({
  setup(_, ctx) {
    return () => <div class="layout">{ctx.slots.default ? ctx.slots.default() : ''}</div>;
  },
});
