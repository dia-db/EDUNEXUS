const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://DIA:dhiyabiju@cluster0.3wzqtez.mongodb.net/eLearning?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
console.log('DB is connected')
}).catch((error)=>{
    console.log('Error in connection');
})