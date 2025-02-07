import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your-project-id', // you'll get this after setup
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-02-07', // use today's date
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
} 