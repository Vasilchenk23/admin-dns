import type { CollectionConfig } from 'payload/';

export const Services: CollectionConfig = {
  slug: 'services', 
  fields: [
    { name: 'title', type: 'text', required: true },  
    { name: 'description', type: 'textarea' },  
    { name: 'svg_image', type: 'text' },  
  ],
};

export default Services;

