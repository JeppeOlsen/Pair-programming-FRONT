const baseUrl = "https://restjeppethuejonas.azurewebsites.net/api/records/"

Vue.createApp({
    data() {
        return {
            message: "Hello World",

            //Get all / Sort
            records: [],
            allRecords: [],
            title: null,
            artist: null,

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

        methods: {
            async getAll(url) {
                try {
                    const response = await axios.get(url)
                    this.allRecords = await response.data
                    this.records = this.allRecords
                    console.log(this.allRecords)
                }
                catch (ex) {
                    alert(ex.message)
                }
            },
        },
        filterByTitle(title) {
            console.log("Title:" + title + ":")
            console.log("All records " + this.allRecords)
            this.records = this.allRecords.filter(r => r.title.includes(title))
            console.log("filtered records: " + this.records)
        },
        
        filterByArtist(artist) {
            console.log("Artist:" + artist + ":")
            console.log("All artist " + this.allRecords)
            this.records = this.allRecords.filter(r => r.artist.includes(artist))
            console.log("filtered artists: " + this.records)
        },
    },







}).mount("#app")