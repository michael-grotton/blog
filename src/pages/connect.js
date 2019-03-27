import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styles from "./connect.module.css"


class Connect extends React.Component {
  render() {
    return (
      <Layout>
          <h3 className={styles.text}>Let's be internet friends!</h3>
          <form className={styles.formCont} name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <div className={styles.element}>
              <label>Your Name: </label>
              <input className={styles.input} type="text" name="name" />
            </div>
            <div className={styles.element}>
              <label>Your Email: </label>
              <input className={styles.input} type="email" name="email" />
            </div>

            <div className={styles.messageElement}>
              <label>Message: </label>
              <textarea style={{height:200}} className={styles.input} name="message"></textarea>
            </div>
            <div className={styles.element}>
              <button className={styles.send} type="submit">Send</button>
            </div>
          </form>
      </Layout>
    )
  }
}

export default Connect
