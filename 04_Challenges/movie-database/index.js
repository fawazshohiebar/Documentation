const express =require ('express')
const app =express()

const movies= [ { title: 'Jaws', year: 1975, rating: 8 }, { title: 'Avatar', year: 2009, rating: 7.8 }, { title: 'Brazil', year: 1985, rating: 8 }, { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 } ]
// app.all('*',(req,res)=>res.send('okkkk'))
// app.listen(3002,()=>console.log('ok'))

app.get('/movies/read',(req,res)=>{
    res.send({status:200,data:movies})
})
// listarray.splice(c,1);
//use this way to test the create 
//curl "http://localhost:3000/movies/add?title=The%20Matrix&year=1999&rating=8.7"
//if(!title||!year||year.length<4||typeof year!='number'
//http://localhost:3000/movies/create/?title=20Matrix&year=1999&rating=8.7



app.post('/movies/create',(req,res)=>{
    const {title,year,rating}=req.query;

if(!title||!year||year.length<4||isNaN(year))
{res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})

}
else if(!rating){
    const rating=4
    const newMovie={title,year,rating};
    
    movies.push(newMovie);
    res.send(movies);
}
else{
    const newMovie={title,year,rating};
    
    movies.push(newMovie);
    res.send(movies);
}
})

// try the update code by this fomula
// http://localhost:3000/movies/update/1/?title=halabel5amees

app.put('/movies/update/:id',(req,res)=>{
   const id=req.params.id 
 const{title,year,rating}=req.query;
 if(title){
   movies[id-1].title=title
   res.send(movies)
}
if(year){
    movies[id-1].year=year
   res.send(movies)

}
if (rating){
    movies[id-1].rating=rating
    res.send(movies)
}

}
)




app.delete('/movies/delete/:id',(req,res)=>{
    const id =req.params.id
    movies.splice(id-1,1);
    res.send(movies)
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
