const mongoose = require("mongoose");

// const DB = process.env.DATABASE

const DB = ("mongodb+srv://shivamsinghpatna12345:Shivam12345s@cluster0.2mawjak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})