import type { CollectionConfig } from 'payload';

export const Articles: CollectionConfig = {
  slug: 'articles',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'short_description', type: 'textarea' },
    { name: 'long_description', type: 'textarea' },
    { name: 'image_url', type: 'text' },
    { name: 'year', type: 'number' },
    { name: 'month', type: 'text' },
    { name: 'day', type: 'number' },
  ],
};

export default Articles;
