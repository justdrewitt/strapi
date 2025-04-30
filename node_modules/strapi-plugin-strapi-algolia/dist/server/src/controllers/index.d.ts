/// <reference types="koa" />
declare const _default: {
    'strapi-algolia-index-articles': ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        index(ctx: import("koa").Context & {
            request: {
                body?: unknown;
                rawBody: string;
            };
        }): Promise<any>;
    };
    'strapi-algolia-config': ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        contentTypes(ctx: import("koa").Context & {
            request: {
                body?: unknown;
                rawBody: string;
            };
        }): Promise<void>;
    };
};
export default _default;
