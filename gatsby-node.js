const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      projects: allContentfulDmPortfolioProjects {
        edges {
          node {
            slug
          }
        }
      }

      posts: allContentfulDmPortfolioBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.projects.edges.forEach(({ node }) => {
    createPage({
      path: `project/${node.slug}`,
      component: path.resolve("./src/templates/ProjectTemplate.tsx"),
      context: {
        slug: node.slug,
      },
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/BlogTemplate.tsx"),
      context: {
        slug: node.slug,
      },
    })
  })

  const posts = data.posts.edges
  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/BlogListTemplate.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
