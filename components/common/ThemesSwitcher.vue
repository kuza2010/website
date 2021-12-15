<template>
    <navbar-button
        :id="id"
        :aria-label="colorMode==='light'? 'moon': 'sun'"
        :icon-left="colorMode==='light'? 'moon': 'sun'"
        @onButtonClick="toggleColorMode"
    />
</template>

<script>
import NavbarButton from '~/components/navbar/buttons/NavbarButton'

export default {
    name: 'ThemesSwitcher',
    components: { NavbarButton },
    inject: ['$chakraColorMode', '$toggleColorMode'],
    data () {
        return {
            id: `theme-switcher-${this._uid}`
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        },
        userColorMode () {
            const userSelectedColorMode = localStorage.getItem('color-mode')
            return userSelectedColorMode === undefined ? 'light' : userSelectedColorMode
        }
    },
    mounted () {
        if (this.colorMode !== this.userColorMode) {
            this.toggleColorMode()
            return
        }

        document.body.classList.add(this.colorMode)
    },
    methods: {
        toggleColorMode () {
            const prev = this.colorMode
            this.$toggleColorMode()
            localStorage.setItem('color-mode', this.colorMode)
            document.body.classList.remove(prev)
            document.body.classList.add(this.colorMode)
        }
    }
}
</script>
