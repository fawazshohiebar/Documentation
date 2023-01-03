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
app.get(`/hello/:id`,(req,res)=>{
    const id =req.params.id || 'World'
    res.json({status: 200, message: `Hello,${id}`})
})
app.get('/search',(req,res)=>{
    const search=req.query.s

if(search){
res.send({status:200,message:"ok",data:search})
}else{
    res.send({status:500, error:true, message:"you have to provide a search"})

}


})
app.listen(3000,()=>console.log('example app listen on port 3000'))