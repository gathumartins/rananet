export async function GET(req: Request) {
    const query = `query NewQuery {
  netPartners:partners(first:50, where: {orderby: {field: TITLE, order: ASC}}) {
    edges {
      node {
        partners {
          website
        }
        featuredImage {
          node {
            sourceUrl
            title
            id
          }
        }
        id
        title
      }
    }
  }
  netPage:page(id: "cG9zdDo1NQ==") {
    content
    id
    title
    slug
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