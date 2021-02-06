<template>
    <c-flex :mt="[4, 5]" :flex-direction="['column', 'row']"
            :align-items="['left', 'center']"
            :class="colorMode ==='dark' ? 'article-dark': 'article-light'"
            w="95%" rounded="6px"
            p="1" justify-content="space-between"
            cursor="pointer"
    >
        <c-box :ml="[1,4]" max-w="300px">
            <c-text font-size="sm" font-weight="medium"
                    mb="1"
            >
                {{ data }}
            </c-text>
            <c-text :mb="[0,1]"
                    font-size="xl" font-weight="bold"
                    my="0" text-overflow="ellipsis"
                    white-space="nowrap" overflow="hidden"
            >
                {{ title }}
            </c-text>
        </c-box>
        <c-flex :mr="[0,4]" :ml="[1,0]"
                :mb="[4,0]" :mt="[2,0]"
        >
            <tag text="Tag-1"
                 color="dangerBold" hover-color="danger"
            />
            <tag text="Tag-2"
                 color="successBold" hover-color="success"
            />
            <tag text="Tag-3"
                 color="warningBold" hover-color="warning"
            />
        </c-flex>
    </c-flex>
</template>

<script>
import { CBox, CFlex, CText } from '@chakra-ui/vue'
import Tag from '~/components/Tag'

export default {
    name: 'Article',
    components: {
        Tag,
        CFlex,
        CBox,
        CText
    },
    inject: ['$chakraColorMode'],
    // eslint-disable-next-line vue/require-prop-types
    props: ['id', 'title', 'data', 'isNew', 'tagArray'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped lang="scss">

.article-dark {
    &:hover {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        background-color: var(--secondary-black);
        transition: all 0.5s ease 0s;
    }

    &:not(:hover) {
        transition: all 0.5s ease 0s;
    }
}

.article-light {

    box-shadow: 5px 5px 10px 0 var(--color-border-light);

    &:hover {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        background-color: var(--purple-200);
        transition: all 0.5s ease 0s;
    }

    &:not(:hover) {
        transition: all 0.5s ease 0s;
    }
}

</style>
