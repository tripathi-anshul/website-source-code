const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/projects.js"))),
  "component---src-pages-sample-1-sample-1-mdx": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/Sample 1/sample1.mdx"))),
  "component---src-pages-sample-2-sample-2-mdx": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/Sample 2/Sample2.mdx"))),
  "component---src-pages-senioryear-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/senioryear.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/pages/work.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/anshultripathi/Desktop/Git Material/gatsby-site/src/templates/post.js")))
}

