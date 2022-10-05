
Vue.createApp({

    data() {

        return {

            message: null,
            numberOfRepetition: null,
            buttonCheck: false
        }

    },
    computed: {
        repeatMessage(){
            var repeatedMessage = "";
            for (let i =0; i < this.numberOfRepetition; i++) {
                repeatedMessage += this.message;
              }
              this.buttonCheck = true;
              return repeatedMessage;
        }
    },

    methods: {
        checkIfNumberIsPositive(){
            if(this.numberOfRepetition>=0){
                return true;
            }
            else return false;
        }

    }

}).mount("#app")