const express =require ('express')
const app =express()
const port =3000

app.all('*',(req,res)=>res.send('okkkk'))
app.listen(port,()=>console.log('ok'))