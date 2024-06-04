import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';


export async function GET(req: NextRequest) {
    const slug = req.nextUrl.searchParams.get('slug');
    const pageType = req.nextUrl.searchParams.get('type');

     // Define your GraphQL query
     const query = `
      query getSeo($slug: ID!){
        ${pageType}(id: $slug, idType: SLUG) {
            seo {
            title
            metaDesc
            schema {
                raw
            }
            opengraphUrl
            opengraphSiteName
            opengraphDescription
            opengraphTitle
            opengraphImage {
                sourceUrl
            }
            opengraphType
            }
        }
    }
    `;  

     // Define the variables for your query
   const variables = { slug, pageType};

     // Fetch data from the WordPress GraphQL API
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

     const post = json.data;

      return NextResponse.json({ post });
   }