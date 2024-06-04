export async function GET(req: Request) {
    const query = `
  {
  page(id: "cG9zdDo1OQ==") {
    content
    id
    slug
    title
    aboutpage {
      approach {
        description
        title
        image {
          sourceUrl
        }
      }
      mission {
        description
        image {
          sourceUrl
        }
        title
      }
      whatWeDo {
        description
        title
        image {
          sourceUrl
        }
      }
    }
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
    const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, { headers:{'Content-Type':'application/json'},cache: 'no-store'});
    const data = await res.json();

    return Response.json(data.data.page);
}