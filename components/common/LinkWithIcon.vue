<template>
    <c-link
        :href="to"
        :is-external="isExternalLink"
        :class="colorMode === 'dark'? 'dark-link' :'light-link'"
    >
        <span v-if="left">
            <c-icon
                mt="-5px"
                :name="icon"
                :alt="getName"
            />
            {{ text }}
        </span>
        <span v-else>
            {{ text }}
            <c-icon
                mt="-5px"
                :name="icon"
                :alt="getName"
            />
        </span>
    </c-link>
</template>

<script>
import { CIcon, CLink } from '@chakra-ui/vue'

export default {
    name: 'LinkWithIcon',
    components: {
        CIcon,
        CLink
    },
    inject: ['$chakraColorMode'],
    props: {
        to: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        // for the first time
        isExternalLink: {
            type: Boolean,
            required: true
        },
        left: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        getName () {
            return `${this.isExternalLink ? 'external-link' : 'link-to'}-${this.icon}-alt`
        },
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped lang="scss">
@use "assets/abstracts/colors" as *;

.light-link {
    font-weight: bold;
    color: $link-primary-light;

    &:visited {
        color: $link-primary-visited;
    }

    &:active {
        color: $link-primary-active-light;
    }
}

.dark-link {
    font-weight: bold;
    color: $link-primary-dark;

    &:visited {
        color: $link-primary-visited;
    }

    &:active {
        color: $link-primary-active-dark;
    }
}

</style>
