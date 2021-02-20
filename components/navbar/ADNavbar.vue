<template>
    <sticky-nav-bar v-if="!isMobileView"
                    justify-content="flex-end"
    >
        <nuxt-link class="navbar-logo" to="/">
            <navbar-button text="Danilin Artyom"/>
        </nuxt-link>
        <nuxt-link to="/about">
            <navbar-button text="About"/>
        </nuxt-link>
        <nuxt-link to="/blog">
            <navbar-button text="Blog"/>
        </nuxt-link>
        <nuxt-link to="/guide">
            <navbar-button text="Guide"/>
        </nuxt-link>
        <themes-switcher/>
    </sticky-nav-bar>

    <sticky-nav-bar v-else
                    sticky-bottom
                    justify-content="space-around"
                    flex-direction="column"
                    class="mobile-navbar"
    >
        <nuxt-link to="/about">
            <mobile-navbar-button icon="user-graduate" text="About"
                                  to="/about"
            />
        </nuxt-link>
        <nuxt-link to="/blog">
            <mobile-navbar-button icon="blog" text="Blog"
                                  to="/blog"
            />
        </nuxt-link>
        <nuxt-link to="/guide">
            <mobile-navbar-button icon="screwdriver" text="Guide"
                                  to="/guide"
            />
        </nuxt-link>
        <mobile-themes-switcher/>
    </sticky-nav-bar>
</template>

<script lang="js">
import StickyNavBar from '~/components/navbar/StickyNavbar'
import NavbarButton from '~/components/navbar/buttons/NavbarButton'
import ThemesSwitcher from '~/components/common/ThemesSwitcher'
import MobileThemesSwitcher from '~/components/common/MobileThemesSwitcher'
import MobileNavbarButton from '~/components/navbar/buttons/MobileNavbarButton'

export default {
    name: 'ADNavbar',
    components: {
        MobileNavbarButton,
        ThemesSwitcher,
        MobileThemesSwitcher,
        NavbarButton,
        StickyNavBar
    },
    data () {
        return {
            // TODO: how can i get width before rendering
            width: 1024
        }
    },
    computed: {
        isMobileView () {
            // show hamburger if the screen size less 600 px
            return this.width <= 600
        }
    },
    destroyed () {
        window.removeEventListener('resize', this.onWindowResize)
    },
    mounted () {
        this.$nextTick(function () {
            this.onWindowResize()
        })
        window.addEventListener('resize', this.onWindowResize)
    },
    methods: {
        onWindowResize () {
            this.width = window.innerWidth
        }
    }
}
</script>

<style lang="scss" scoped>

.navbar-logo {
    margin-left: 1em;
    margin-right: auto;
}

.mobile-navbar {
    height: 5rem;
}
</style>
