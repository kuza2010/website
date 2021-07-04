<template>
    <footer :class="colorMode === 'dark'? 'dark-mode' :'light-mode'">
        <c-flex flex-direction="column"
                justify-content="center"
                :pt="[6,8]"
                :pb="[32,16]"
        >
            <c-flex max-w="1150px" w="100%"
                    mx="auto"
            >
                <c-box ml="4" :mb="[4,1]">
                    <now-playing :color-scheme="colorMode === 'dark' ? spotifyGreen:spotifyBlack"
                                 :current-track="currentTrack"
                    />
                </c-box>
            </c-flex>
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
import { CFlex, CBox } from '@chakra-ui/vue'
import Theme from '~/config/custom-theme'
import FooterLink from '~/components/footer/FooterLink'
import FooterButton from '~/components/footer/FooterButton'
import NowPlaying from '~/components/NowPlaying'

export default {
    name: 'ADFooter',
    components: {
        NowPlaying,
        FooterButton,
        FooterLink,
        CFlex,
        CBox
    },
    inject: ['$chakraColorMode'],
    data () {
        return {
            spotifyBlack: Theme.colors.brand.spotify.black,
            spotifyGreen: Theme.colors.brand.spotify.green,
            currentTrack: {
                isEmpty: true,
                track: null,
                artists: [],
                href: null
            }
        }
    },
    async fetch () {
        await fetch(`${this.$config.apiBaseUrl}/api/current-track`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Can not fetch current playing track, details: ', response.statusText)
                } else {
                    return response.json()
                }
            })
            .then(({ isEmpty, track, artists, href }) => { this.currentTrack = { isEmpty, track, artists, href } })
            .catch((_) => {
                this.currentTrack = {
                    isEmpty: true,
                    track: null,
                    artists: [],
                    href: null
                }
            })
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    },
    watch: {
        '$route.query': '$fetch'
    }
}
</script>

<style scoped lang="scss">

footer {
}

</style>
