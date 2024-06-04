export async function GET(req: Request) {
    const query = `
    {
  partners( first:50, where: {orderby: {field: TITLE, order: ASC}}) {
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
      }
    }
  }
}
    `;

    const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, { headers: { 'Content-Type': 'application/json' },cache: 'no-store'});
    const data = await res.json()

    return Response.json(data.data.partners.edges);
}