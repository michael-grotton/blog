import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styles from "../components/projects.module.css"
import RecentProjects from "../components/recentprojects"

class Projects extends React.Component {
  render() {
    return (
      <Layout>
          <RecentProjects />
      </Layout>
    )
  }
}

export default Projects
