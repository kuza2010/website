<template>
    <a-d-button :size="lg" :text="text"
                :class="colorMode==='dark'? 'footer-button-dark': 'footer-button-light'"
                color="primary" mx="4"
    />
</template>

<script>
import ADButton from '~/components/common/ADButton'

export default {
    name: 'FooterButton',
    components: { ADButton },
    inject: ['$chakraColorMode'],
    props: ['size', 'text'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped lang="scss">

.footer-button-dark {
    border: 1px solid var(--black-accent);
    background: var(--black-accent);

    &:hover {
        border: 1px solid var(--text-light);
        background: var(--primary-black);
    }
}

.footer-button-light {
    background: var(--purple-900);

    &:hover {
        background: var(--purple-600);
    }
}

</style>
