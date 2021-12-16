<template>
    <c-link
        :href="href"
        :class="colorMode === 'dark'? 'link-dark' :'link-light'"
    >
        {{ text }}
    </c-link>
</template>

<script>
import { CLink } from '@chakra-ui/vue'

export default {
    name: 'ADTextLink',
    components: {
        CLink
    },
    inject: ['$chakraColorMode'],
    // eslint-disable-next-line vue/require-prop-types
    props: ['text', 'href'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

// https://css-tricks.com/4-ways-to-animate-the-color-of-a-text-link-on-hover/
<style scoped lang="scss">
@use "assets/abstracts/colors" as *;

.link-light {
    overflow: hidden;
    background: linear-gradient(to right, $info-bold, $info-bold 50%, $dark-accent 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 400ms ease;
    text-decoration: none;

    &:hover {
        background-position: 0 100%;
    }

    & :visited {
        color: $text-dark;
    }

    & :active {
        color: $text-dark;
    }

}

.link-dark {
    overflow: hidden;
    background: linear-gradient(to right, $warning-bold, $warning-bold 50%, $text-light 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 400ms ease;
    text-decoration: none;

    &:hover {
        background-position: 0 100%;
    }

    & :visited {
        color: $text-light;
    }

    & :active {
        color: $text-light;
    }

}

</style>
