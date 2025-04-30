import { Core } from '@strapi/strapi';
import { algoliasearch } from 'algoliasearch';
import { HookEvent } from '../../../utils/event';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    getStrapiObject: (event: HookEvent, populate: any, hideFields: string[]) => Promise<any>;
    afterUpdateAndCreate: (_events: any[], populate: any, hideFields: string[], transformToBooleanFields: string[], transformerCallback: ((string, any) => any | null) | null, idPrefix: string, algoliaClient: ReturnType<typeof algoliasearch>, indexName: string, contentType: string) => Promise<void>;
    afterUpdateAndCreateAlreadyPopulate: (contentType: string, articles: any[], idPrefix: string, algoliaClient: ReturnType<typeof algoliasearch>, indexName: string, transformToBooleanFields?: string[], hideFields?: string[], transformerCallback?: ((string, any) => any | null) | null) => Promise<void>;
    afterDeleteOneOrMany: (_event: any, idPrefix: string, algoliaClient: ReturnType<typeof algoliasearch>, indexName: string, many: boolean) => Promise<void>;
};
export default _default;
