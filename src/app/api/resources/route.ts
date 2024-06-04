export async function GET(req: Request) {
  const query = `query NewQuery {
  allNews: posts {
    edges {
      node {
        id
        slug
        title
        categories {
              edges {
                node {
                  name
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
        }
      }
    }
  }
  featNews: posts(where: {categoryId: 7, orderby: {field: DATE, order: ASC}}) {
        edges {
          node {
            id
            slug
            title
            news_Resources {
              postOrder
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      } 
  page(id: "cG9zdDo1Nw==") {
    content
    id
    slug
    title
    pages {
      customTitle
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
    `;
    const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, { headers: { 'Content-Type': 'application/json' }, cache: 'no-store'});
    const data = await res.json();

    return Response.json(data.data)
}