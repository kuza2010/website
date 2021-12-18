import moment from 'moment'

const mapToBriefArticle = (article) => {
    const monthAgo = moment().subtract(1, 'months')
    const createdAt = moment(article.created)
    return {
        ...article,
        isNew: monthAgo.isBefore(createdAt)
    }
}

export {
    mapToBriefArticle
}
