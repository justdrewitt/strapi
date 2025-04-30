/// <reference types="koa" />
declare const _default: {
    services: {
        algolia: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            getAlgoliaClient: (applicationId: string, apiKey: string) => Promise<import("algoliasearch").Algoliasearch>;
            createOrDeleteObjects: (objectsToSave: any[], objectsIdsToDelete: string[], algoliaClient: import("algoliasearch").Algoliasearch, indexName: string, transformToBooleanFields?: string[]) => Promise<void>;
        };
        strapi: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            getStrapiObject: (event: import("../../utils/event").HookEvent, populate: any, hideFields: string[]) => Promise<any>;
            afterUpdateAndCreate: (_events: any[], populate: any, hideFields: string[], transformToBooleanFields: string[], transformerCallback: (string: any, any: any) => any, idPrefix: string, algoliaClient: import("algoliasearch").Algoliasearch, indexName: string, contentType: string) => Promise<void>;
            afterUpdateAndCreateAlreadyPopulate: (contentType: string, articles: any[], idPrefix: string, algoliaClient: import("algoliasearch").Algoliasearch, indexName: string, transformToBooleanFields?: string[], hideFields?: string[], transformerCallback?: (string: any, any: any) => any) => Promise<void>;
            afterDeleteOneOrMany: (_event: any, idPrefix: string, algoliaClient: import("algoliasearch").Algoliasearch, indexName: string, many: boolean) => Promise<void>;
        };
        lifecycles: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            loadLifecycleMethods(): Promise<void>;
        };
        utils: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            filterProperties: (object: Record<string, any>, hiddenFields: string[]) => {};
            getEntryId: (event: import("../../utils/event").HookEvent) => any;
            getChunksRequests: (array: any[], chunkSize?: number) => any[][];
        };
    };
    bootstrap: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => Promise<void>;
    config: {
        default: {
            indexPrefix: string;
        };
        validator: (config: unknown) => void;
    };
    controllers: {
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
    routes: {
        admin: {
            type: string;
            routes: {
                method: string;
                path: string;
                handler: string;
                config: {
                    policies: string[];
                };
            }[];
        };
    };
};
export default _default;
