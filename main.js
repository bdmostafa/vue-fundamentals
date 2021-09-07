Vue.component('task-list', {
    template: `
            <div>
                <h2>All Tasks</h2>
                <task v-for="task in tasks">
                    {{task.task}}
                </task>
                <hr />
                <h2>Completed Tasks</h2>
                <task v-for="task in tasks" v-if="task.completed">
                    {{task.task}}
                </task>
                <h2>Uncompleted Tasks</h2>
                <task v-for="task in tasks" v-if="!task.completed">
                    {{task.task}}
                </task>
            </div>
            
        `,

    data () {
        return {
            tasks : [
                {task: 'go to office', completed: false},
                {task: 'go to bed', completed: true},
                {task: 'go back home', completed: true},
                {task: 'go to kitchen', completed: false},
                {task: 'go to field', completed: true},
            ],
        }
    }
})

Vue.component('task', {
    template: '<li><slot></slot></li>'
})

new Vue({
    el:'#app-root'
})