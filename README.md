# blog

For a long time, my blog has been hosted at https://steebe.github.io as a simple Jekyll repository that only required __*.md updates__. It's about damn time I buckled down and did the heavy lifting.

## An Aside

The gist of this project is to preserve the ease of blog post publishing to a personal domain and remove the dependency on existing static site generators like Jekyll or Hugo or Gatsby. Ergo, there were a few requirements up front:

1. Blog posts themselves must be markdown files, for human readability and extensibility
2. The entire solution must be self-developed (to a reasonable extent; I am allowing myself the liberty of leveraging `npm` packages for front-end tasks that would be a bear to recreate)
3. The entire solution must be full-stack

## HLD

1. Host blog post *.md files in S3
2. Establish a Node.js server application, atop a PostgreSQL database to serve a new personal website
3. Establish a React client application to act as the new site's front-end

## Tools
* [Node.js](https://nodejs.org)
* [Express](https://expressjs.com)
* [Typescript](https://www.typescriptlang.org/)
