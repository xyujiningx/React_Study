const express = require('express')  //  익스프레스모듈가져온다.
const app = express() 
const port = 5000
const bodyParser = require("body-parser");

const config=require('./config/key')

const {User}=require("./models/User");

// application/x-www-form-urlencoded
// 클라이언트에서 온 정보를 서버에서 분석해서 가져오게해주는 것
app.use(bodyParser.urlencoded({extended:true}));
// json타입으로 된것을 분석해서 가져오게 해주는 것
app.use(bodyParser.json());

const mongoose=require('mongoose')
mongoose.connect( config.mongoURI,{useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,})
  .then(() => console.log("mongo db is connected.."))
  .catch((err) => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!!!')
})  //root 디렉토리에오면출력되게

app.post('/register',(req,res)=>{
    // 회원 가입할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다

    
    const user=new User(req.body)
    user.save((err,userInfo)=>{ // 정보들을 user모델에 저장해주는것
       if(err) return res.json({success:false,err})
       return res.status(200).json({
           success:true
       })   // 200 : 성공 의미
    })
    // save -> 몽고디비에서 오는 메서드

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})