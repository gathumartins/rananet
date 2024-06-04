export async function GET(req: Request) {
    const query = `
      {
            page(id: "cG9zdDo1MQ==") {
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
            }
    `;
    const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, { headers: { 'Content-Type': 'application/json' },cache: 'no-store' });
    const data = await res.json();

    return Response.json(data.data.page)
}