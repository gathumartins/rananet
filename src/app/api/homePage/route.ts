export async function GET(request: Request) {
  const query = `query NewQuery{
  homeNews: posts(where: {categoryId: 7, orderby: {field: DATE, order: ASC}}) {
    edges {
      node {
        id
        slug
        title
        news_Resources {
          postOrder
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
  netPartners:partners(first: 50, where: {orderby: {field: TITLE, order: ASC}}) {
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
  page(id: "cG9zdDo0Mw==") {
    seo {
      title
      metaDesc
      schema {
        raw
      }
      opengraphUrl
      opengraphSiteName
      opengraphDescription
      opengraphTitle
      opengraphImage {
        sourceUrl
      }
      opengraphType
    }
    id
    title
    slug
    content
    homehero {
      herodesc
      herotitle
      heroimgs {
        imagetitle
        image {
          sourceUrl
        }
      }
      actionbutton {
        actionLink
        actionTitle
      }
    }
    homenetwork {
      networktitle
      networks {
        networkLink
        networkdescription
        networkimage {
          sourceUrl
        }
        networktitle
      }
    }
    homepriorities {
      prioritiesdescription
      prioritiestitle
      priorities {
        prioritydescription
        prioritytitle
      }
    }
  }
}
    `;
    const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, {
        headers: {
      'Content-Type': 'application/json',
      },
      cache: 'no-store'
    })
    const data = await res.json()
 
    return Response.json( data.data)
}

