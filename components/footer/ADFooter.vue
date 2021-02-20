<template>
    <footer :class="colorMode === 'dark'? 'dark-mode' :'light-mode'">
        <c-flex flex-direction="column"
                justify-content="center"
                :pt="[12,16]"
                :pb="[32,16]"
        >
            <c-flex :w="['65%', '35%', '25%']"
                    mx="auto" mt="1"
                    justify-content="center"
            >
                <footer-button text="About" to="/about"/>
                <footer-button text="Home" to="/"/>
                <footer-button text="Blog" to="/blog"/>
            </c-flex>
            <c-flex :w="['60%', '35%', '25%']"
                    mx="auto" mt="8"
                    justify-content="center"
            >
                <footer-link icon="guthubIcon" href="https://github.com/kuza2010"/>
                <footer-link icon="linkedInIcon" href="https://www.linkedin.com/in/artyom-danilin-a11026194"/>
                <footer-link icon="gmailIcon" :href="`mailto:${$config.email}`"/>
            </c-flex>
        </c-flex>
    </footer>
</template>

<script>
import { CFlex } from '@chakra-ui/vue'
import Theme from '~/config/custom-theme'
import FooterLink from '~/components/footer/FooterLink'
import FooterButton from '~/components/footer/FooterButton'

export default {
    name: 'ADFooter',
    components: {
        FooterButton,
        FooterLink,
        CFlex
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
