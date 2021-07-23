import Vue from 'vue'

Vue.filter('articleDateFormat', dateStr =>
    new Date(dateStr).toLocaleDateString('en-US')
)
