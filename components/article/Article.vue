<template>
    <c-flex :mt="[4, 5]" :flex-direction="['column', 'row']"
            :style="border"
            w="100%" rounded="6px"
            p="1" :align-items="['', 'center']"
            justify-content="space-between"
    >
        <c-box :ml="[1,4]"
               max-w="300px"
        >
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
        <c-box :mr="[0,4]" :ml="[1,0]"
               :my="[1,0]"
        >
            Tag 1
            Tag 2
            Tag 3
        </c-box>
    </c-flex>
</template>

<script>
import { CBox, CFlex, CText } from '@chakra-ui/vue'
import Theme from '~/config/custom-theme'

export default {
    name: 'Article',
    components: {
        CFlex,
        CBox,
        CText
    },
    inject: ['$chakraColorMode'],
    // eslint-disable-next-line vue/require-prop-types
    props: ['id', 'title', 'data', 'isNew', 'tagArray'],
    computed: {
        border () {
            if (this.colorMode === 'dark') {
                return {}
            }
            return {
                boxShadow: `5px 5px 10px 0px ${Theme.colors.borderLight}`
            }
        },
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped lang="scss">

</style>
