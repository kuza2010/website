<template>
    <mobile-navbar-button
        :aria-label="colorMode==='light'?'moon': 'sun'"
        :icon="colorMode==='light'? 'moon': 'sun'"
        :text="colorMode==='light'? 'Dark': 'Light'"
        @onButtonClick="toggleColorMode"
    />
</template>

<script>
import MobileNavbarButton from '~/components/navbar/buttons/MobileNavbarButton'

export default {
    name: 'ThemesSwitcher',
    components: { MobileNavbarButton },
    inject: ['$chakraColorMode', '$toggleColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    },
    mounted () {
        const mode = localStorage.getItem('color-mode')
        if (!mode) {
            return
        }
        if (this.$chakraColorMode() !== mode) {
            this.toggleColorMode()
        }
    },
    methods: {
        toggleColorMode () {
            this.$toggleColorMode()
            localStorage.setItem('color-mode', this.$chakraColorMode())
        }
    }
}
</script>
