import type { Core } from '@strapi/strapi';
import type { algoliasearch as algoliasearchType } from 'algoliasearch';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    getAlgoliaClient: (applicationId: string, apiKey: string) => Promise<import("algoliasearch").Algoliasearch>;
    createOrDeleteObjects: (objectsToSave: any[], objectsIdsToDelete: string[], algoliaClient: ReturnType<typeof algoliasearchType>, indexName: string, transformToBooleanFields?: string[]) => Promise<void>;
};
export default _default;
