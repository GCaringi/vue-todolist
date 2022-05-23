const app = new Vue({
    el: "#app",
    data: {
        todos: [
            {
                text: "Fare esercizio",
                done: "false",
            },
            {
                text: "Lavare l'auto",
                done: "false"
            }
        ],
        newTask: ""
    },
    methods: {
        addTask(){
            this.todos.push({
                    text: this.newTask,
                    done: "false"})
            this.newTask = "";
        }
    },
})