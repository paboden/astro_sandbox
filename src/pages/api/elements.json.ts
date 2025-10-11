// src/pages/api/elements.json.ts
    import type { APIRoute } from 'astro';
    import { getCollection } from 'astro:content';

    export const GET: APIRoute = async () => {
      const elements = await getCollection('periodic_elements_list');
      return new Response(JSON.stringify(elements), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    };