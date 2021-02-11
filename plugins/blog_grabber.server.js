const fs = require('fs')
const path = require('path')
const parser = require('gray-matter')

// start here
const blogPathSegment = 'pages/blog'
const blogDir = path.join(process.cwd(), blogPathSegment)
const fileNames = fs.readdirSync(blogDir)

// collect metadata
const postMetaData = fileNames.map((fileName) => {
    const postFullPath = path.join(blogDir, fileName)
    const content = fs.readFileSync(postFullPath, 'utf-8')

    const { data } = parser(content)
    return data
})

export default postMetaData
