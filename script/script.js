
var DateTime = luxon.DateTime;
const { createApp } = Vue ;

createApp({
    data() {
        return{
        activeItem: 0 ,
        newMessage:"",
        searchQuery: "",
        now : DateTime.now(),
        dt : DateTime.local(2017, 5, 15, 8, 30),
        user: {
            img: "img/me.jpeg",
            userName: "Francesco Cesarano"
        },
        replyMessages :[
            {
                date: '10/01/2020 15:51:00',
                message: 'Bene e tu?',
                status: 'received' 
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Ok',
                status: 'received' 
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Grazie',
                status: 'received' 
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Si e tu?',
                status: 'received' 
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Va bene',
                status: 'received' 
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Ciao',
                status: 'received' 
            }

        ],
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {   
                        over: false,
                        dropdown : false,
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        
                    },
                    {   
                        over: false,
                        dropdown : false,
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {   
                        over: false,
                        dropdown : false,
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {   
                        over: false,
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {   
                        over: false,
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {   
                        over: false,
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {   
                        over: false,
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {   
                        over: false,
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {   
                        over: false,
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {   
                        over: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {   
                        over: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {   
                        over: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {   
                        over: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {   
                        over: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {   
                        over: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {   
                        over: false,
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {   
                        over: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {   
                        over: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {   
                        over: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {   
                        over: false,
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {   
                        over: false,
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]        
        }
    },
    methods: 
    {
        onlySpaces(str) {
            return /^\s*$/.test(str)
        },

        activeChat(num) {
            this.activeItem = num
            
        },
        sendMessage() {
            if(!this.onlySpaces(this.newMessage)) {
                
                this.contacts[this.activeItem].messages.push({
                    date: '10/01/2020 15:50:00',
                    message: this.newMessage,
                    status: 'sent'   
                });
                this.newMessage = ""
                setTimeout(this.respMessage, 2000)
            }

        },
        respMessage() {
            num = parseInt(Math.random() * (6 - 0))
            console.log(num);
            this.contacts[this.activeItem].messages.push(this.replyMessages[num]);
            
        },
        hover(message) {
            message.over = true;

        },
        leave(message) {
            message.over = false;
            message.dropdown = false;
        },
        deleteMessage(index) {  
            this.contacts[this.activeItem].messages.splice(index, 1);
        },

        search(num){
            nome = this.contacts[num].name.toLowerCase(); 

            if(nome.includes(this.searchQuery)) {
                return true;            
            }else{
                return false;
            }
            

        },

        messageExist() {  
            if(this.newMessage.length > 0){
                return true;
            }
        }

    },


        
}).mount("#app") 

