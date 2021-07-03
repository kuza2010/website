<template>
    <c-link :is-external="isExternalLink" :href="to"
            :class="colorMode === 'dark'? 'dark-link' :'light-link'"
            font-weight="normal"
    >
        <span v-if="left">
            <c-icon :name="icon" :alt="getName"
                    mt="-5px"
            />
            {{ text }}
        </span>
        <span v-else>
            {{ text }}
            <c-icon :name="icon" :alt="getName"
                    mt="-5px"
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

.light-link {
    font-weight: bold;
    color: var(--link-primary-light) !important;

    &:visited {
        color: var(--link-primary-visited) !important;
    }

    &:active {
        color: var(--link-primary-active-light) !important;
        outline: none;
        box-shadow: none;
        border: none;
        font-weight: 500;
    }
}

.dark-link {
    font-weight: bold;
    color: var(--link--primary-dark) !important;

    &:visited {
        color: var(--link-primary-visited) !important;
    }

    &:active {
        color: var(--link-primary-active-dark) !important;
        outline: none;
        box-shadow: none;
        border: none;
        font-weight: 500;
    }
}

</style>
