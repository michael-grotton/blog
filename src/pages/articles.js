import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styles from "../components/articles.module.css"

class Articles extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const categories = this.props.data.categories.group.filter(
category => category.fieldValue !== 'pinned'
)

    return (
      <Layout>
          <h2 className={styles.header}>All Blog Posts</h2>
          <div className={styles.cats}>
            {categories.map(category => (
              <div className={styles.catCont}>
                <Link to={`/tags/${category.fieldValue}`} className={styles.cat} key={category.fieldValue}>
                  <span key={category.fieldValue}>
                    #{category.fieldValue} <strong className={styles.count}>{category.totalCount}</strong>
                  </span>
                </Link>
              </div>
              ))}
          </div>
          <div className={styles.posts}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const tags = node.frontmatter.tags
              const headerURL = node.frontmatter.attachments[0].publicURL

              return (
              <Link className = {styles.link} style={{ boxShadow: `none`}} to={node.fields.slug}>
                <div className={styles.post} key={node.fields.slug}>
                  <div class={styles.image} style={{backgroundImage:'url(' + headerURL + ')'}}></div>
                  <div class={styles.text}>
                    <h3 className={styles.title}
                      style={{
                        marginTop:0,
                        marginBottom:0,
                      }}
                    >
                    {title}
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <div className={styles.tags}>
                    {tags.map((tag) => {
                      return(
                      <div className={styles.tagCont}>
                        <Link className={styles.tag} to={`/tags/${tag}`}>
                          #{tag}
                        </Link>
                      </div>
                      )
                    })}
                    </div>
                  </div>
                </div>
              </Link>
              )
            })}
          </div>
      </Layout>
    )
  }
}

export default Articles

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
            tags
            attachments {
              publicURL
            }
          }
        }
      }
    }
    categories: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
  }
`
