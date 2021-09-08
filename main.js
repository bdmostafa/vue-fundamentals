Vue.component('message', {

    props: ['title', 'body'],

    data () {
        return {
            inVisible: true,
        }
    },

    template: `
        <article class="message" v-show="inVisible">
            <div class="message-header">
                <p>{{title}}</p>
            <button class="delete" aria-label="delete" @click="inVisible = false"></button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article> 
    `,

    methods: {
        // hide () {
        //     this.inVisible = false;
        // }
    }
});

Vue.component('modal', {
    
    props: ['body'],

    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box">
                        <p> {{ body }} </p>
                    </div>
                </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    `,
})


new Vue({
    el:'#app-root',

    data () {
        return {
            showModal: false,
        }
    }
})