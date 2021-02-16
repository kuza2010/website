import Vue from 'vue'

Vue.directive(
    'transition-appear-on-screen', {
        inserted: (el, binding) => {
            // use this to prevent rendering error with circle on timeline
            if (!el.classList.contains('hidden')) {
                throw new Error('the html element which uses this directive has have to class `hidden`')
            }
            const f = () => {
                const rect = el.getBoundingClientRect()
                const inView = (rect.width > 0 &&
                rect.height > 0 &&
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                )
                if (inView) {
                    el.classList.add('element-is-visible')
                    window.removeEventListener('scroll', f)
                }
            }
            window.addEventListener('scroll', f)
            f()
        },
        update: (el) => {
            if (el.classList.contains('hidden')) {
                el.classList.remove('hidden')
            }
        }
    }
)
