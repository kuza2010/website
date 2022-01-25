<template>
    <sticky-nav-bar
        v-if="!isMobileView"
        justify-content="flex-end"
    >
        <nuxt-link
            to="/"
            class="navbar-logo"
            @click.native="navigateTo('/')"
        >
            <navbar-button
                text="☕ Danilin Artyom"
            />
        </nuxt-link>
        <nuxt-link
            to="/about"
            @click.native="navigateTo('/about')"
        >
            <navbar-button text="About"/>
        </nuxt-link>
        <nuxt-link
            to="/blog"
            @click.native="navigateTo('/blog')"
        >
            <navbar-button text="Blog"/>
        </nuxt-link>
        <nuxt-link
            to="/guide"
            @click.native="navigateTo('/guide')"
        >
            <navbar-button text="Guide"/>
        </nuxt-link>
        <themes-switcher/>
    </sticky-nav-bar>

    <sticky-nav-bar
        v-else
        sticky-bottom
        justify-content="space-around"
        class="mobile-navbar"
    >
        <mobile-navbar-button
            icon="user-graduate"
            text="About"
            @onButtonClick="navigateTo('/about')"
        />
        <mobile-navbar-button
            icon="blog"
            text="Blog"
            @onButtonClick="navigateTo('/blog')"
        />
        <mobile-navbar-button
            icon="screwdriver"
            text="Guide"
            @onButtonClick="navigateTo('/guide')"
        />
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
            return this.width <= 600
        }
    },
    mounted () {
        this.$nextTick(() => this.onWindowResize())
        window.addEventListener('resize', this.onWindowResize)
    },
    destroyed () {
        window.removeEventListener('resize', this.onWindowResize)
    },
    methods: {
        onWindowResize () {
            this.width = window.innerWidth
        },
        navigateTo (path) {
            if (this.$route.path === path) {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
                return
            }

            this.$router.push({ path })
        }
    }
}
</script>

<style lang="scss">
@use '/assets/abstracts/_variables.scss' as *;

.navbar-logo {
    margin-right: auto;
}

.mobile-navbar {
    height: $navbar-mobile-height;
}
</style>
