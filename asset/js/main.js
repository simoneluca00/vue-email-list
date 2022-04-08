var app = new Vue(
{
    el:'#root',

    data: {
        mails : [],
    },

    mounted(){

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {

                let singleEmail = res.data.response;
                
                return this.mails.push(singleEmail);
            })     
        }

    },

    methods: {

    }
}
)