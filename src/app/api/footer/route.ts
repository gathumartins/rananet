export async function GET(req: Request) {
  const footerMenu = `query NewQuery {
    menuItems(where: {location: FOOTER}, first:20) {
      nodes {
        key: id
        parentId
        title: label
        uri
      }
    }
    topNav:menuItems(where: {location: PRIMARY}, first:20) {
      nodes {
        key: id
        parentId
        title: label
        uri
      }
    }
}`;
    const res = await fetch(
        `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(footerMenu)}`,
        {
            headers: {
                'Content-Type': 'application/json'
          },cache: 'no-store'
        })
    const data = await res.json()
    return Response.json(data)
}