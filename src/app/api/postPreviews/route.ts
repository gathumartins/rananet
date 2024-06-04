import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';
export async function GET(req: NextRequest) {
  const postType = req.nextUrl.searchParams.get('typeName')?.toLocaleLowerCase();
  const id = req.nextUrl.searchParams.get('p');
  let query;
  switch (postType) {
    case 'event':
      query = `
        query getDraft($id:ID!) {
          ${postType}(id: $id, idType: DATABASE_ID){
            id
              title
              slug
              uri
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
              events {
                registerbutton {
                  buttonLink
                  buttonText
                }
                endtime
                eventdate
                eventtimezone
                eventvenue
              }
            }

        }`
      break;
    case 'post':
      query = `
      query getDraft($id:ID!) {
      ${postType}(id: $id, idType: DATABASE_ID) {
          id
          title
          slug
          uri
          content
          tags {
            edges {
              node {
                id
                name
                tagId
              }
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          news_Resources {
            dateauthored
            author {
              id
              firstName
              lastName
              name
              slug
            }
          }
        }
      }`
      break; 
    case "career":
       query = `query getDraft($id:ID!) {
      ${postType}(id: $id, idType: DATABASE_ID) {
      careerId
          careers {
            closingDate
            applyLink {
              buttonText
              link
            }
          }
          content
          id
          slug
          title
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
      }
    }`
      break;
    default:
      console.log('This is not a News Event or Career');
  }
   
    const variables = { id, postType };
    const response = await fetch(`${process.env.WORDPRESS_API_URL}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
      },
       method: 'POST',
       body: JSON.stringify({ query, variables }),
    });
    
    const json: any = await response.json();
     if (json.errors) {
       console.error(json.errors);
       throw new Error('Failed to fetch API');
     }

    const draft = json.data;
    return NextResponse.json({draft});
}