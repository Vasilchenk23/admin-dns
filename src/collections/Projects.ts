import type { CollectionConfig } from 'payload/';

export const Projects: CollectionConfig = {
  slug: 'projects', 
  fields: [
    { name: 'title', type: 'text', required: true },  
    { name: 'short_description', type: 'textarea' },  
    { name: 'long_description', type: 'textarea' }, 
    { name: 'image_url', type: 'text' },  
  ],
};

export default Projects;
