new Vue({
    el: "#app-root",
    data: {
        message: "I am Vue Developer.",
        isDev: true,
        skills: ['Vue', 'React', 'Angular'],
        obj: {
            name: 'Mostafa',
            profession: 'Developer'
        },
        // welcomeGreet: () => {
        //     return 'Welcome to Vue!!!'
        // }
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png",
        imgAlt: "Vue Logo",
        size: 50,
        gitProfileLink: "https://github.com/bdmostafa",
        vHtml: "<div>This is from v-html directive...</div>"

    },
    methods: {
        // welcomeGreet: function() {
        //     return 'Welcome to Vue!!!'
        // }
        welcomeGreet: () => {
            return 'Welcome to Vue!!!'
        },
        getInfo() {
            return `I am ${this.obj.name}. ${this.message}`
        }
    }
})