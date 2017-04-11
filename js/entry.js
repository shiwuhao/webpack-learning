/**
 * Created by shiwuhao on 2017/4/10.
 */
require('./module-one.js');
require('./module-two.js');

import Vue from 'vue';
import Heading from './components/heading.vue';

new Vue({
    el:'#app',
    components:{ Heading }
});



// Vue.component('Heading', require('./components/heading.vue'));
// new Vue({
//     el:'#app',
// });

require('../css/style.css');