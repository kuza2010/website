<template>
    <navbar-button
        :aria-label="colorMode==='light'?'moon': 'sun'"
        :icon="colorMode==='light'? 'moon': 'sun'"
        @onButtonClick="toggleColorMode"
    />
</template>

<script>
import NavbarButton from '~/components/navbar/buttons/NavbarButton'

export default {
    name: 'ThemesSwitcher',
    components: { NavbarButton },
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
