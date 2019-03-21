import React from "react"
import styles from "./articles.module.css"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

class Articles extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    return (
          <div>
            <SEO
              title="All posts"
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <h2 className={styles.header}>Recent Articles</h2>
          </div>
    )
  }
}

export default Articles;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
