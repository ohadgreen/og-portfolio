import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const fetchAuthor = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          }
        }
      }
    `)

  return (
    <footer>
      <p>{`Created by ${fetchAuthor.site.siteMetadata.author}, © 2020`}</p>
    </footer>
  )
}

export default Footer;
