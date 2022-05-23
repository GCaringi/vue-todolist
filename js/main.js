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
        ]

    },
    methods: {
        isClear(){
            return 0;
        }
    },
})