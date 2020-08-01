// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("./../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-senioryear-js": () => import("./../src/pages/senioryear.js" /* webpackChunkName: "component---src-pages-senioryear-js" */),
  "component---src-pages-work-js": () => import("./../src/pages/work.js" /* webpackChunkName: "component---src-pages-work-js" */)
}

