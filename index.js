const express = require('express')  //  익스프레스모듈가져온다.
const app = express() 
const port = 5000

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://yuja:go2771@cluster0.c16fa.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false,
}).then(()=>console.log('MongoDB Connected....'))
    .catch(err=>console.log('Error...'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})  //root 디렉토리에오면출력되게

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})