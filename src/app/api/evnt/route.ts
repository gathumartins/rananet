export async function GET(req: Request) {
    const query = `
    query NewQuery {
          eventPage:page(id: "cG9zdDo1NA==") {
            id
            title
            slug
            content
            featuredImage {
            node {
                sourceUrl
            }
            }
        }
        allEvents:events {
            edges {
            node {
                title
                slug
                id
                events {
                eventdate
                starttime
                endtime
                eventtimezone
                eventvenue
                registerbutton {
                    buttonText
                    buttonLink
                }
                }
                featuredImage {
                node {
                    sourceUrl
                }
                }
            }
            }
        }
}
    `;

    const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, { headers: { 'Content-Type': 'application/json' },cache: 'no-store'});
    const data = await res.json();

    return Response.json(data.data);
}