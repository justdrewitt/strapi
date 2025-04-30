import type { Core } from '@strapi/strapi';
import { HookEvent } from '../../../utils/event';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    filterProperties: (object: Record<string, any>, hiddenFields: string[]) => {};
    getEntryId: (event: HookEvent) => any;
    getChunksRequests: (array: any[], chunkSize?: number) => any[][];
};
export default _default;
