import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import styles from "../components/articles.module.css"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} article${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div>
        <h2 className={styles.header}>{tagHeader}</h2>
          <div className={styles.posts}>
            {edges.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const tags = node.frontmatter.tags
              return (
              <Link className = {styles.link} style={{ boxShadow: `none`,margin:0}} to={node.fields.slug}>
                <div className={styles.post} key={node.fields.slug}>
                  <div class={styles.image}></div>
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
                    {tags.map((current) => {
                      return(
                      <div className={styles.tagCont}>
                        <Link className={current === tag ? styles.tagUpdating : styles.tag} to={`/tags/${current}`}>
                          #{current}
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
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
