const baseUrl = "https://restjeppethuejonas.azurewebsites.net/api/records/"

Vue.createApp({
    data() {
        return {
            message: "Hello World",

            //Get all / Sort
            records: [],

            //Get by id
            idtofind: 0,
            singlebook: null,

            //Delete
            deleteId: 0,
            deleteMessage: "",

            //Post
            addData: { title: "", price: 0 },
            addMessage: "",

            //Put
            updateData: { id: 0, title: "", price: 0 },
            updateMessage: ""


        }
    },
    methods: {
        sayHello(name) {
            if (name != null)
                this.message = "Hello " + name
            else
                this.message = "Hello No Name"
        },

        getAllRecords() {
            this.helperGetAndShow(baseUrl)
        },
        async helperGetAndShow(Url) { 
            try {
                const response = await axios.get(Url)
                this.records = await response.data
                
            } 
            catch (ex) {
                alert(ex.message)
            }
        },
       
        
        


    
    }
}).mount("#app")