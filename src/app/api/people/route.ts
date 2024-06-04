export async function GET(req: Request) {
    const query = `
  {
  page(id: "cG9zdDo2MA==") {
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
  coreTeam: teams(where: {categoryId: 2, orderby: {field: DATE, order: ASC}}) {
    edges {
      node {
        content
        slug
        id
        title
        team {
          designation
          linkedin
          twitterx
        }
        featuredImage {
          node {
            sourceUrl
            slug
          }
        }
      }
    }
  }
    boardTeam: teams(where: {categoryId: 3, orderby: {field: DATE, order: ASC}}) {
    edges {
      node {
        content
        title
        slug
        id
        team {
          designation
          linkedin
          twitterx
        }
        featuredImage {
          node {
            sourceUrl
            slug
          }
        }
      }
    }
  }
}
    `;
    const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, { headers:{'Content-Type':'application/json'},cache: 'no-store' });
    const data = await res.json();

    return Response.json(data.data);
}