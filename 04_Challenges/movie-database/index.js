const express =require ('express')
const app =express()


// app.all('*',(req,res)=>res.send('okkkk'))
// app.listen(3002,()=>console.log('ok'))

app.get('/',(req,res)=>{
    res.send('ok')
})
app.get('/test',(req,res)=>{
    res.send({status:200,message:"ok"})
})

app.get('/time',(req,res)=>{
    const currenttime=new Date().toTimeString().slice(0, 5)
    res.send({status:200,message:currenttime})
})

app.listen(3000,()=>console.log('example app listen on port 3000'))