const mongoose =require('mongoose')

 const dbConnection=()=>{
    try{
         mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('db Connection successfully')
    }
    catch{
        console.log(console.error())
    }
}

module.exports={
    dbConnection
}