<template>
    <c-flex
        m="0 1rem"
        flex-direction="column"
        align-items="center"
    >
        <c-box :mt="[6,12]">
            <c-heading
                :mb="[1]"
                mt="0" mx="auto"
                text-align="center"
            >
                Blog
            </c-heading>
            <c-stack
                :mx="[0,6,0]"
                text-align="justify"
            >
                <c-text
                    :font-size="['1rem', '1.25rem', '1.3rem']"
                    font-weight="normal" color="textSecondary"
                    max-w="70%" mx="auto"
                    text-align="center"
                >
                    Here I share some of my ideas, thinking, insights and views on life. Take a cup of coffee and just
                    make yourself at home...
                </c-text>
                <c-box>
                    <a-d-search-input
                        :value="searchTerm"
                        placeholder="Search by tag or article title..."
                        @onSearchChanged="onSearchChanged"
                    />
                </c-box>
                <a-d-article-list
                    v-if="filteredPosts && filteredPosts.length !== 0"
                    title="Article list"
                    :article-list="filteredPosts"
                />
                <a-d-empty-article
                    v-else
                    title="No articles found"
                    comment="No articles by your search criteria"
                />
            </c-stack>
        </c-box>
    </c-flex>
</template>

<script lang="js">
import { CFlex, CBox, CHeading, CText, CStack } from '@chakra-ui/vue'
import ADSearchInput from '~/components/form/ADSearchInput'
import ADArticleList from '~/components/article/ADArticleList'
import ADEmptyArticle from '~/components/article/ADEmptyArticle'

import { mapToBriefArticle } from '~/utils/articleUtils'
import { defaultSorting } from '~/utils/sortingUtils'

export default {
    name: 'Blog',
    components: {
        CHeading,
        CFlex,
        CStack,
        CText,
        CBox,
        ADArticleList,
        ADSearchInput,
        ADEmptyArticle
    },
    async asyncData ({ $content }) {
        const articles = await $content('articles')
            .only(['title', 'created', 'languageTags', 'slug'])
            .sortBy('created', 'desc')
            .limit(5)
            .fetch()

        const posts = articles.map(mapToBriefArticle)
            .sort((a, b) => defaultSorting(a.created, b.created))
        const filteredPosts = [...posts]

        return {
            posts,
            filteredPosts
        }
    },
    data () {
        return {
            searchTerm: ''
        }
    },
    head () {
        return {
            title: 'Blog - in dev'
        }
    },
    methods: {
        onSearchChanged (newValue) {
            if (this.searchTerm !== newValue) {
                this.searchTerm = newValue.trim()
                this.runFiltering()
            }
        },
        runFiltering () {
            if (this.searchTerm) {
                this.filteredPosts = this.posts.filter((post) => {
                    return post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || post.languageTags.includes(this.searchTerm)
                })
            } else {
                this.filteredPosts = this.posts
            }
        }
    }
}
</script>
