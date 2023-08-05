const app = require("./index");
const mongoose = require("mongoose");

// const DB_HOST = 'mongodb+srv://msselizabeth:EliSher090398GastroGuide@gastroguide.9ja7kgx.mongodb.net/gastroguide?retryWrites=true&w=majority'

const { DB_HOST, PORT } = process.env;


mongoose.connect(DB_HOST)
    .then(() => {
        app.listen(PORT)
        console.log("Connect success")
    })
    .catch(error => {
        console.log(error.message)
        process.exit(1);
    })
;
