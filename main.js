const app1 = new Vue({
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
        vHtml: "<div>This is from v-html directive...</div>",

        awesome: true,
        // userType: "username",
        // userType: "email", 
        userType: "new",
        randomNumber: 1,
        x: 0,
        y: 0,
        myName: '',
        formData: {
            name: '',
            profession: ''
        },
        counter: 0,
        clicks: 0,
        a: 0,
        b: 0,
        age: 20,
        textForApp2: '',
        tasks: [
            { id: 1, name: 'abc', completed: false },
            { id: 2, name: 'xyz', completed: true },
            { id: 3, name: 'efg', completed: false },
            { id: 4, name: 'mno', completed: false },
            { id: 5, name: 'efo', completed: true },
        ],

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
        },
        generateRandomNumber() {
            setTimeout(() => {
                this.randomNumber = Math.floor(Math.random() * 10) + 1
            }, 1000);
        },
        getCoordinates(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        addName(name, event) {
            this.myName = name;
            console.log(event);
        },
        onSubmit() {
            console.log(this.formData)
        },
        // increment() {
        //     console.log('increment')
        //     return this.counter;
        // },
        // clicked() {
        //     console.log('clicked')
        //     return this.clicks;
        // },
        // addToAmethod: function(){
        //     console.log('addToAmethod');
        //     return this.a + this.age;
        // },
        // addToBmethod: function(){
        //     console.log('addToBmethod');
        //     return this.b + this.age;
        // },
        send() {
            app2.receivedMsg = this.textForApp2;
        }
    },
    computed: {
        increment() {
            console.log('increment')
            return this.counter;
        },
        clicked() {
            console.log('clicked')
            return this.clicks;
        },
        addToAmethod: function () {
            console.log('addToAmethod');
            return this.a + this.age;
        },
        addToBmethod: function () {
            console.log('addToBmethod');
            return this.b + this.age;
        },
        uncompleted() {
            return this.tasks.filter(task => !task.completed)
        }
    }
});

const app2 = new Vue({
    el: "#app2",
    data: {
        receivedMsg: ''
    }
})