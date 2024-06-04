export async function GET(req: Request) {
    const query = `
    query NewQuery {
    page(id: "cG9zdDo1Mw==") {
                authorDatabaseId
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
careers(where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      node {
        careerId
        careers {
          applyLink {
            buttonText
            link
          }
          closingDate
        }
        date
        content
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        title
      }
    }
  }
}
    `;
    const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, { headers: { 'Content-Type': 'application/json' }, cache: 'no-store'});
    const data = await res.json();

    return Response.json(data.data)
}