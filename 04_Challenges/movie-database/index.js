const express =require ('express')
const app =express()

const movies= [ { title: 'Jaws', year: 1975, rating: 8 }, { title: 'Avatar', year: 2009, rating: 7.8 }, { title: 'Brazil', year: 1985, rating: 8 }, { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 } ]
// app.all('*',(req,res)=>res.send('okkkk'))
// app.listen(3002,()=>console.log('ok'))

app.get('/movies/read',(req,res)=>{
    res.send({status:200,data:movies})
})
app.get('/movies/create',(req,res)=>{
    res.send({status:200,data:movies})
})
app.get('/movies/update',(req,res)=>{
    res.send({status:200,data:movies})
})
app.get('/movies/delete',(req,res)=>{
    res.send({status:200,data:movies})
})
app.get('/movies/read/by-date',(req,res)=>{
  
    const sortedMovies = movies.sort((a, b) => {
        const dateA = new Date(a.year);
        const dateB = new Date(b.year);
        return dateA - dateB;
      });
    
      // Return the sorted movies in the response
      res.send({ status: 200, data: sortedMovies });
})


app.get('/movies/read/by-rating',(req,res)=>{
  
    const sortedMovies = movies.sort((a, b) => {
        const dateA = a.rating;
        const dateB = b.rating;
        return dateB - dateA;
      });
    
      // Return the sorted movies in the response
      res.send({ status: 200, data: sortedMovies });
})


app.get('/movies/read/id/:id',(req,res)=>{
    const moid =req.params.id || 1
    if(movies[moid]){
    res.send({status: 200, data:movies[moid]})
}else{
    res.status(404).send({ status: 404, error: true, message: `the movie ${moid} does not exist` });
}
})



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
app.listen(3000,()=>{
    console.log('example app listen on port 3000')
console.log(movies.length)

}
    )
