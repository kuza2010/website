<template>
    <c-aspect-ratio-box
        :ratio="4/3"
        :max-w="['100%', '85%']"
        m="auto"
    >
        <c-image
            :src="`/articles/${image}`" :alt="alt"
            object-fit="cover"
        />
    </c-aspect-ratio-box>
</template>

<script>
import { CAspectRatioBox, CImage } from '@chakra-ui/vue'

export default {
    name: 'ADBlogMainImage',
    components: {
        CAspectRatioBox,
        CImage
    },
    props: {
        image: {
            type: String,
            required: true
        }
    },
    computed: {
        alt () {
            return this.image.split('.').slice(0, -1).join('.')
        }
    }
}
</script>
