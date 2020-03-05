import React from "react"
import headerStyle from "./header.module.css"
import { Link, graphql, useStaticQuery } from "gatsby";

const Header = () => {
  const fetchData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          }
        }
      }
    `)

  return (
    <header>
      <div className={headerStyle.headerGrid}>
        <Link to="/" className={headerStyle.hello}>{fetchData.site.siteMetadata.title}</Link>
        <Link to="/blog" className={headerStyle.blog}>blog</Link>
        <Link to="/about"  className={headerStyle.about}>about</Link>
        <Link to="/contact" className={headerStyle.contact}>contact</Link>
      </div>
    </header>
  )
}

export default Header;
