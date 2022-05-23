const app = new Vue({
    el: "#app",
    data: {
        todos: [
            {
                text: "Fare esercizio",
                done: false
            },
            {
                text: "Lavare l'auto",
                done: false
            }
        ],
        newTask: ""
    },
    methods: {
        addTask(){
            let regex = /^\S(\w+)(( ){1}(\w+))*\S*/g;
            newTask = this.newTask.trim();
            if (regex.test(this.newTask)){
                this.todos.push(
                    {
                        text: this.newTask,
                        done: "false;"
                    }
                );
                this.newTask = "";
            }else{
                this.newTask = "";            }
        },
        removeTask(index){
            console.log(index);
            this.todos.splice(index, 1);
        },
        checkTask(index){
            console.log(index);
            this.todos[index].done = !this.todos[index].done;
        }
    }
}) 