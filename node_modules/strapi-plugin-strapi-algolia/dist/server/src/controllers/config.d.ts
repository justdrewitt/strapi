import type { Core } from '@strapi/strapi';
import Koa from 'koa';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    contentTypes(ctx: Koa.Context & {
        request: {
            body?: unknown;
            rawBody: string;
        };
    }): Promise<void>;
};
export default _default;
