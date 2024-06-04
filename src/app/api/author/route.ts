import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function GET(req: NextRequest) {
    const slug = req.nextUrl.searchParams.get('slug');

    const query = `
    query GetAuthor($slug: ID!) {
        user(id: $slug, idType: SLUG) {
            id
            firstName
            lastName
            slug
            authorsSocials {
            linkedin
            twitterX
            }
            avatar {
            url
            }
            description
            name
        }
        }
    `    
    const variables = { slug };
    
         const response = await fetch(`${process.env.WORDPRESS_API_URL}`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ query, variables }),
     });

     const json:any = await response.json();

     if (json.errors) {
       console.error(json.errors);
       throw new Error('Failed to fetch API');
     }

     const author = json.data;

      return NextResponse.json({ author });

}