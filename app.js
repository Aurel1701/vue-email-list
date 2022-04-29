const app = new Vue({
    el: "#app",
    data: {
        list_email: [],
    },
    methods: {
    },
    mounted() {
        for (var i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    this.list_email.push(response.data.response)
                })
        }
    }

})
