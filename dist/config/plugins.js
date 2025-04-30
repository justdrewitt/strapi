"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    'users-permissions': {
        config: {
            jwt: {
                expiresIn: '7d',
            },
            rest: {
                defaultLimit: 100,
                maxLimit: 250,
            },
        },
    },
    seo: {
        enabled: true,
        config: {
            contentTypes: {
                'api::blog-post.blog-post': {
                    field: 'seo',
                    references: {
                        title: 'title',
                        description: 'content',
                        image: 'image',
                        keywords: 'tags',
                    },
                },
            },
        },
    },
    'strapi-algolia': {
        enabled: true,
        config: {
            applicationId: process.env.ALGOLIA_APP_ID,
            apiKey: process.env.ALGOLIA_API_KEY,
            debug: true,
            prefix: 'dev_',
            contentTypes: [
                {
                    name: 'Blog Post',
                    uid: 'api::blog-post.blog-post',
                    index: 'blog_posts',
                    fields: ['title', 'content', 'slug', 'tags'],
                    transform: (data) => {
                        var _a;
                        return {
                            ...data,
                            objectID: data.id,
                            tags: ((_a = data.tags) === null || _a === void 0 ? void 0 : _a.map(tag => tag.name)) || [],
                        };
                    },
                },
            ],
        },
    },
});
