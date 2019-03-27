import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styles from "./connect.module.css"


class Connect extends React.Component {
  render() {
    return (
      <Layout>
          <h3>Let's be internet friends!</h3>
          <div className={styles.text}>
            <p style={{margin:0,padding:0}}>Twitter: <a className={styles.link} href="http://twitter.com/michaelgrotton">@michaelgrotton</a></p>
            <small>(I don't tweet very much)</small>
          </div>
      </Layout>
    )
  }
}

export default Connect
