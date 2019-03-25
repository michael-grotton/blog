import React from "react"
import styles from "./projects.module.css"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"


function Projects() {
    return (
      <div>
        <h2 className={styles.header}>Projects</h2>
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
      </div>
      )
}
export default Projects;
