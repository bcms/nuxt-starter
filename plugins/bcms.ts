import { BCMSClient, BCMSClientPrototype } from "@becomes/cms-client";
import { Plugin } from "@nuxt/types";

export interface ClientServicePrototype {
  get(): BCMSClientPrototype;
}

function clientService() {
  const client = BCMSClient({
    cmsOrigin: process.env.NUXT_ENV_BCMS_API_ORIGIN || "http://localhost:1280",
    key: {
      id: process.env.NUXT_ENV_BCMS_API_KEY || "",
      secret: process.env.NUXT_ENV_BCMS_API_SECRET || ""
    }
  });
  const self: ClientServicePrototype = {
    get() {
      return client;
    }
  };
  return self;
}

declare module "@nuxt/types" {
  interface Context {
    $bcms: ClientServicePrototype;
  }
}

const bcmsClient: Plugin = context => {
  context.$bcms = clientService();
};

export default bcmsClient;
