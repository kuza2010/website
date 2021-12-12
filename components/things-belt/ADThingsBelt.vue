<template>
    <c-box :mt="[4,8]" mx="4">
        <!--   things i like     -->
        <ad-things-indicator
            main-text="🤗"
            open-popover-main-text="😍"
            popover-text="I'm really keen on ..."
        />
        <c-flex
            :border-color="colorMode === 'dark' ?'primary' :'brand.purple.800'"
            border-top="1px"
            pt="3"
            flex-wrap="wrap"
            flex-direction="row"
            justify-content="space-between"
        >
            <a-d-hobby
                v-for="l in like"
                :key="l.thing"
                :text="l.thing"
                :enjoy="l.enjoy"
            />
        </c-flex>
        <!--   things i dont like    -->
        <ad-things-indicator
            main-text=" 🙄"
            open-popover-main-text="🤮"
            popover-text="I'm not keen on/hate ..."
        />
        <c-flex
            :border-color="colorMode === 'dark' ?'primary' :'brand.purple.800'"
            border-top="1px" pt="3"
            flex-wrap="wrap"
            flex-direction="row"
            justify-content="space-between"
        >
            <a-d-hobby
                v-for="d in dislike"
                :key="d.thing"
                :text="d.thing"
                :enjoy="d.enjoy"
            />
        </c-flex>
    </c-box>
</template>

<script>
import { CBox, CFlex } from '@chakra-ui/vue'
import { like, dislike } from '~/config/my-hobby-collection'
import ADHobby from '~/components/things-belt/ADHobby'
import AdThingsIndicator from '~/components/things-belt/AdThingsIndicator'

export default {
    name: 'ADThingsBelt',
    components: {
        AdThingsIndicator,
        ADHobby,
        CFlex,
        CBox
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
