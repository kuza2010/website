<template>
    <c-box mt="8" mx="4">
        <!--   things i like     -->
        <c-text font-size="3xl" my="4">
            🤗
        </c-text>
        <c-flex :border-color="colorMode === 'dark' ?'primary' :'brand.purple.800'"
                pt="3" border-top="1px"
                flex-wrap="wrap" flex-direction="row"
                justify-content="space-between"
        >
            <a-d-hobby v-for="l in like"
                       :key="l.thing" :text="l.thing"
                       :enjoy="l.enjoy"
            />
        </c-flex>

        <!--   things i dont like    -->
        <c-text font-size="3xl" my="4">
            🙄
        </c-text>
        <c-flex :border-color="colorMode === 'dark' ?'primary' :'brand.purple.800'"
                pt="3" border-top="1px"
                flex-wrap="wrap" flex-direction="row"
                justify-content="space-between"
        >
            <a-d-hobby v-for="d in dislike"
                       :key="d.thing" :text="d.thing"
                       :enjoy="d.enjoy"
            />
        </c-flex>
    </c-box>
</template>

<script>
import { CBox, CFlex, CText } from '@chakra-ui/vue'
import { like, dislike } from '~/config/my-hobby-collection'
import ADHobby from '~/components/things-belt/ADHobby'

export default {
    name: 'ADThingsBelt',
    components: {
        ADHobby,
        CFlex,
        CBox,
        CText
    },
    inject: ['$chakraColorMode'],
    data () {
        return {
            like,
            dislike
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped>

</style>
