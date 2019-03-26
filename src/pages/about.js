import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styles from "./about.module.css"


class About extends React.Component {
  render() {
    return (
      <Layout>
          <div className={styles.text}>
            <p>to do</p>
          </div>
          <div className={styles.test}>
            ...
            >>>
            ~~~
          </div>
      </Layout>
    )
  }
}

export default About
