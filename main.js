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
        welcomeGreet: () => {
            return 'Welcome to Vue!!!'
        }
    }
})