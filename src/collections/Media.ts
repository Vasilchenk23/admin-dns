import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: 'media', // Папка для загрузки файлов
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp'], // Разрешенные типы файлов
  },
};

export default Media;
