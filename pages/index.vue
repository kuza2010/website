<template>
    <CBox bg="tomato" h="100vh"
          p="4" color="white"
          display="flex" align-items="center"
          justify-content="center"
    >
        <h1>Hello Nuxt</h1>
    </CBox>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'

export default {
    name: 'Index',
    components: {
        CBox
    }
}
</script>
