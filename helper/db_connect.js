import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://wolfsbane:wolfsbane123@collegecluster.4tic5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
.then(function(){
    console.log("Database connected")
})  
.catch((err) => {
    console.log(err.message)
  
})
