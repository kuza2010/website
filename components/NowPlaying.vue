<template>
    <c-stack is-inline align="center">
        <c-icon
            name="spotifyIcon" size="32px"
            :fill="colorScheme"
        />

        <!--        render link -->
        <c-link
            v-if="!currentTrack.isEmpty"
            :href="currentTrack.href" is-external
            :class="colorMode === 'dark'? 'track-link-dark' :'track-link-light'"
        >
            <c-stack is-inline align="center">
                <c-text
                    white-space="nowrap"
                    text-overflow="ellipsis"
                    overflow="hidden"
                    font-weight="bold"
                    font-size="sm"
                >
                    {{ currentTrack.track }}
                </c-text>
                <c-text font-size="sm">
                    ー
                </c-text>
                <c-text font-weight="semibold" font-size="sm">
                    {{ currentTrack.artists }}
                </c-text>
            </c-stack>
        </c-link>

        <!--        render no track -->
        <c-box v-else>
            <c-stack is-inline align="center">
                <c-text
                    white-space="nowrap"
                    text-overflow="ellipsis"
                    overflow="hidden"
                    font-weight="bold"
                    font-size="sm"
                >
                    Not playing
                </c-text>
                <c-text font-weight="semibold" font-size="sm">
                    ー powered by Spotify API
                </c-text>
            </c-stack>
        </c-box>
    </c-stack>
</template>

<script>
import { CStack, CText, CLink, CIcon } from '@chakra-ui/vue'

export default {
    name: 'NowPlaying',
    components: {
        CStack,
        CText,
        CLink,
        CIcon
    },
    inject: ['$chakraColorMode'],
    // eslint-disable-next-line vue/require-prop-types
    props: ['currentTrack', 'colorScheme'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped lang="scss">

.spotify-logo {
    height: 28px;
    width: 28px;
}

.track-link-light {
    color: var(--text-black) !important;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    & :visited {
        color: var(--text-black) !important;
    }

    & :active {
        color: var(--text-black) !important
    }

}

.track-link-dark {
    color: var(--text-light) !important;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    & :visited {
        color: var(--text-light) !important;
    }

    & :active {
        color: var(--text-light) !important
    }

}

</style>
