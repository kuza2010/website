<template>
    <footer :class="colorMode === 'dark'? 'dark-mode' :'light-mode'">
        <c-flex flex-direction="column"
                justify-content="center"
                :pt="[12,16]"
                :pb="[32,16]"
        >
            <c-flex m="0 auto" justify-content="space-around"
                    :w="['50%', '35%', '25%']"
            >
                <a-d-button size="lg" text="About"
                            color="primary" mr="3"
                            :bg="colorMode === 'dark'? 'blackAccent' :'brand.purple.900'"
                            :_hover="colorMode === 'dark'? {bg: 'blackPrimary', border: `1px solid ${darkThemeBorderColor}`} : {bg: 'brand.purple.600'}"
                />

                <a-d-button size="lg" text="Blog"
                            color="primary" mr="3"
                            :bg="colorMode === 'dark'? 'blackAccent' :'brand.purple.900'"
                            :_hover="colorMode === 'dark'? {bg: 'blackPrimary', border: `1px solid ${darkThemeBorderColor}`} : {bg: 'brand.purple.600'}"
                />

                <a-d-button size="lg" text="Guide"
                            color="primary"
                            :bg="colorMode === 'dark'? 'blackAccent' :'brand.purple.900'"
                            :_hover="colorMode === 'dark'? {bg: 'blackPrimary', border: `1px solid ${darkThemeBorderColor}`} : {bg: 'brand.purple.600'}"
                />

            </c-flex>
            <c-box m="0 auto">
                Footer!!
            </c-box>
        </c-flex>
    </footer>
</template>

<script>
import { CBox, CFlex } from '@chakra-ui/vue'
import ADButton from '~/components/common/ADButton'
import Theme from '~/config/custom-theme'

export default {
    name: 'ADFooter',
    components: {
        ADButton,
        CFlex,
        CBox
    },
    inject: ['$chakraColorMode'],
    data () {
        return {
            darkThemeBorderColor: Theme.colors.textLight
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped lang="scss">

footer {
}

</style>
