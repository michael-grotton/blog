import React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import styles from "./layout.module.css"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className={styles.cont}>
        <header>
          <Navigation/>
        </header>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(30),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
          }}
          className={styles.innerCont}
        >
          <main style={{marginTop:75}}>{children}</main>
          <footer
          className={styles.footer}>
            Made by Michael / <a href="http://www.github.com/michaelgrotton/blog" className={styles.link}>View Source</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
