export async function GET(req: Request) { 
    const query = `query NewQuery {
  btmNav:menuItems(where: {location: FOOTER}) {
    edges {
      node {
        id
        uri
        label
        childItems {
          edges {
            node {
              id
              uri
              label
            }
          }
        }
      }
    }
  }
    topNav:menuItems(where: {location: PRIMARY}) {
    edges {
      node {
        id
        uri
        label
        childItems {
          edges {
            node {
              id
              uri
              label
            }
          }
        }
      }
    }
  }
 } `;
        const res = await fetch(
        `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
        {
            headers: {
                'Content-Type': 'application/json'
            },cache: 'no-store'
        })
    const data = await res.json()
    return Response.json(data)
}

