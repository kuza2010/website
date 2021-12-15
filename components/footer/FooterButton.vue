<template>
    <nuxt-link :to="to">
        <a-d-button
            :size="size" :text="text"
            :class="colorMode==='dark'? 'footer-button-dark': 'footer-button-light'"
            color="primary" mx="4"
        />
    </nuxt-link>
</template>

<script>
import ADButton from '~/components/common/buttons/ADButton'

export default {
    name: 'FooterButton',
    components: { ADButton },
    inject: ['$chakraColorMode'],
    // eslint-disable-next-line vue/require-prop-types
    props: ['size', 'text', 'to'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
