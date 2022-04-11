var app = new Vue(
{
    el:'#root',

    data: {
        mails : [],
        singleEmail : '',
    },

    // mounted() o created()
    mounted(){

        // ANCHOR versione arrow function (this) --> ciclo FOR
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {

                    let singleEmail = res.data.response;
                    if (!this.mails.includes(singleEmail)) {
                        this.mails.push(singleEmail)
                    }

                })     

        // ANCHOR versione con this salvato in una variabile --> ciclo FOR
            // const self = this;
            // axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // .then(function(res){
            //     self.singleEmail = res.data.response;

            //     if (!self.mails.includes(self.singleEmail)) {
            //         self.mails.push(self.singleEmail);
            //     }
            // })
        }

        // ANCHOR versione con il ciclo WHILE
        // let i = 0;
        // while (i < 10) {
        //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        //     .then((res) => {

        //         let singleEmail = res.data.response;
                
        //         if (!this.mails.includes(singleEmail)) {
        //             this.mails.push(singleEmail)
        //         }

        //     })     

        //     i++
        // }

    },

    methods: {

    }
}
)