export async function GET(req: Request) {
    const query = `
      query NewQuery {
      news: posts {
        edges {
          node {
            id
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
        news_Resources {
          dateauthored
          author {
            id
            name
            slug
          }
        }
      }
    }
  }
}`;

    const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, { headers: { 'Content-Type': 'application/json' },cache: 'no-store' });
    const data = await res.json()

    return Response.json(data.data.news);
}