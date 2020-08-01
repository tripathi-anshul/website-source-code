const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/.cache/dev-404-page.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/projects.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/work.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/templates/post.js")))
}

