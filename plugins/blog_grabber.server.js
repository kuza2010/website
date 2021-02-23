const fs = require('fs')
const path = require('path')
const parser = require('gray-matter')

function sortByDate (a, b) {
    if (a.publishedAt < b.publishedAt) {
        return 1
    } else {
        return -1
    }
}

const blogPathSegment = 'pages/blog'
const blogDir = path.join(process.cwd(), blogPathSegment)
const fileNames = fs.readdirSync(blogDir)

// collect metadata
const postMetadata = fileNames
    .filter(filename => filename.includes('mdx'))
    .map((fileName) => {
        const postFullPath = path.join(blogDir, fileName)
        const content = fs.readFileSync(postFullPath, 'utf-8')
        const postName = fileName.replace(/\.mdx$/, '')

        const { data } = parser(content)
        return {
            postName,
            title: data.title,
            publishedAt: data.publishedAt,
            summary: data.summary,
            image: data.image,
            languageTags: data.languageTags,
            isPopular: data.isPopular,
            guides: data.guides,
            isNew: data.isNew
        }
    })
    .sort(sortByDate)

export default postMetadata
