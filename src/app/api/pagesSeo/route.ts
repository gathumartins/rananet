import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';


export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id');
    const pageType = 'page'

     // Define your GraphQL query
     const query = `
      query getSeo($id: ID!){
        ${pageType}(id: $id, idType: ID) {
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
   const variables = { id, pageType};

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

     const pageSeo = json.data.page.seo;

      return NextResponse.json({ pageSeo});
   }