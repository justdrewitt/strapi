import type { Core } from '@strapi/strapi';
import Koa from 'koa';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    index(ctx: Koa.Context & {
        request: {
            body?: unknown;
            rawBody: string;
        };
    }): Promise<any>;
};
export default _default;
