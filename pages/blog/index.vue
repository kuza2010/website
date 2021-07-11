<template>
    <a-d-mock icon="coffee" status="418 I'm teapot"/>
</template>

<script lang="js">
import ADMock from '~/components/ADMock'

export default {
    name: 'Blog',
    components: {
        ADMock
    },
    layout: 'with-header',
    head () {
        return {
            title: 'Blog - in dev'
        }
    }
}
</script>
