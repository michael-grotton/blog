import React from "react"
import styles from "./projects.module.css"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"


function RecentProjects() {
    return (
      <div>
        <h2 className={styles.header}>Projects</h2>
        <h4 className={styles.smallHeader}>Technical Projects</h4>
        <div className={styles.project}>
          <div className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.name}>Spotify Personal Profile</h3>
              <p className={styles.desc}>Node/Express web app that allows a spotify user to login and view their listening history.</p>
            </div>
            <div className={styles.buttons}>
              <Link className={styles.green}>
                Source
              </Link>
              <Link className={styles.blue}>
                Demo
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.name}>michaelgrotton.xyz</h3>
              <p className={styles.desc}>This site, built with Gatsby.js</p>
            </div>
            <div className={styles.buttons}>
              <Link className={styles.green}>
                Source
              </Link>
              <div className={styles.placeHolder}></div>
            </div>
          </div>
        </div>
        <h4 className={styles.smallHeader}>Other</h4>
      </div>
      )
}
export default RecentProjects;
