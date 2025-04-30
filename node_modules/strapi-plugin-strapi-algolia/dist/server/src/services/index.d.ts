declare const _default: {
    algolia: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        getAlgoliaClient: (applicationId: string, apiKey: string) => Promise<import("algoliasearch").Algoliasearch>;
        createOrDeleteObjects: (objectsToSave: any[], objectsIdsToDelete: string[], algoliaClient: import("algoliasearch").Algoliasearch, indexName: string, transformToBooleanFields?: string[]) => Promise<void>;
    };
    strapi: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        getStrapiObject: (event: import("../../../utils/event").HookEvent, populate: any, hideFields: string[]) => Promise<any>;
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
        getEntryId: (event: import("../../../utils/event").HookEvent) => any;
        getChunksRequests: (array: any[], chunkSize?: number) => any[][];
    };
};
export default _default;
