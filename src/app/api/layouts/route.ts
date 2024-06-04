export async function GET(req: Request) {
    const query = `{
  layout(id: "cG9zdDoyODQ=") {
    header {
      navbarLogo {
        logo {
          sourceUrl
        }
        navLink
      }
      signup {
        signupButton {
          buttonText
          buttonLink
        }
        signupdescription
      }
      footerLogo {
        logo {
          sourceUrl
        }
        footerExcerpt
      }
      copyright {
        copyText
        socialLinks {
          socialLabel
          socialLink
          socialIcon {
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

    return Response.json(data.data.layout.header)
}