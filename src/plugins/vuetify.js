import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueKinesis from 'vue-kinesis'

Vue.use(Vuetify);
Vue.use(VueKinesis)

export default new Vuetify({
    theme: {
        dark: true,
    }
});
