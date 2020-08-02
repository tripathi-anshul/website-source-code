const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.js');  

  return graphql(`{
    allMdx {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.allMdx.edges.forEach(({node}) => {
        createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })

  })
}