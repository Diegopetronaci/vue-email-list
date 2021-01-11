let app = new Vue ({

    el: '#app',
    data: {
        //emailCasuale: "",
        emailCasuale: [],
    },
    methods: {

    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(resp => {
                console.log(resp.data.response);
                /* let email = resp.data.response;
                this.emailCasuale = email; */
                this.emailCasuale.push(resp.data.response);
            })
        }
    }
})