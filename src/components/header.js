import React from "react"
import headerStyle from "./header.module.css"
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <div className={headerStyle.headerGrid}>
        <Link to="/" className={headerStyle.hello}>Hello</Link>
        <Link to="/blog" className={headerStyle.blog}>blog</Link>
        <Link to="/about"  className={headerStyle.about}>about</Link>
        <Link to="/contact" className={headerStyle.contact}>contact</Link>
      </div>
    </header>
  )
}

export default Header;
