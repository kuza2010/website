<template>
    <footer :class="colorMode === 'dark'? 'dark-mode' :'light-mode'">
        <c-flex
            class="footer-container"
            flex-direction="column"
            justify-content="center"
            :pt="[6,8]"
            :pb="[32,16]"
        >
            <c-flex
                w="100%"
                mx="auto"
                class="music-list"
            >
                <c-box :mb="[4,1]">
                    <now-playing :current-track="currentTrack"/>
                </c-box>
            </c-flex>
            <c-flex
                mt="1"
                mx="auto"
                justify-content="center"
                :w="['65%', '35%', '25%']"
            >
                <footer-button text="About" to="/about"/>
                <footer-button text="Home" to="/"/>
                <footer-button text="Blog" to="/blog"/>
            </c-flex>
            <c-flex
                mt="8"
                mx="auto"
                justify-content="center"
                :w="['60%', '35%', '25%']"
            >
                <footer-link icon="guthubIcon" :href="$config.github"/>
                <footer-link icon="linkedInIcon" :href="$config.linkedIn"/>
                <footer-link icon="gmailIcon" :href="`mailto:${$config.email}`"/>
            </c-flex>
        </c-flex>
    </footer>
</template>

<script>
import { CFlex, CBox } from '@chakra-ui/vue'
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
            currentTrack: {
                isEmpty: true,
                track: null,
                artists: [],
                href: null
            }
        }
    },
    async fetch () {
        this.currentTrack = await fetch(`${this.$config.apiBaseUrl}api/current-track`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Can not fetch current playing track, details: ', response.statusText)
                } else {
                    return response.json()
                }
            })
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.error(`Can not fetch current playing track, details: ${err}`)
            })
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    },
    watch: {
        '$route.query': '$fetch'
    },
    fetchOnServer: false
}
</script>
