import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import RecentProjects from "../components/recentprojects"
import RecentArticles from "../components/recentarticles"
import Pinned from "../components/pinned"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <RecentArticles />
        <Pinned />
        <RecentProjects />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
