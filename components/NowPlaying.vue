<template>
    <c-stack
        is-inline
        class="track"
        align="center"
    >
        <c-icon
            size="32px"
            name="spotifyIcon"
            :class="colorMode === 'dark' ? 'spotify-light': 'spotify-dark'"
        />
        <!--        render link -->
        <c-link
            v-if="currentTrack && !currentTrack.isEmpty"
            is-external
            :href="currentTrack.href"
            :class="colorMode === 'dark'? 'track-link-dark' :'track-link-light'"
        >
            <c-stack
                is-inline
                align="center"
            >
                <c-text
                    font-size="sm"
                    overflow="hidden"
                    font-weight="bold"
                    white-space="nowrap"
                    text-overflow="ellipsis"
                >
                    {{ currentTrack.track }}
                </c-text>
                <c-text font-weight="semibold" font-size="sm">
                    {{ currentTrack.artists }}
                </c-text>
            </c-stack>
        </c-link>
        <!--        render no track -->
        <c-box v-else>
            <c-stack
                is-inline
                align="center"
            >
                <c-text
                    font-size="sm"
                    overflow="hidden"
                    font-weight="bold"
                    white-space="nowrap"
                    text-overflow="ellipsis"
                >
                    Not playing
                </c-text>
                <c-text font-weight="semibold" font-size="sm">
                    powered by Spotify API
                </c-text>
            </c-stack>
        </c-box>
    </c-stack>
</template>

<script>
import { CStack, CText, CLink, CIcon, CBox } from '@chakra-ui/vue'

export default {
    name: 'NowPlaying',
    components: {
        CBox,
        CStack,
        CText,
        CLink,
        CIcon
    },
    inject: ['$chakraColorMode'],
    // eslint-disable-next-line vue/require-prop-types
    props: ['currentTrack'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
