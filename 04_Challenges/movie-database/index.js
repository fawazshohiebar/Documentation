const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://fawazsho:password2001@fawz.rqoa1wg.mongodb.net/test",
  {
    useNewUrlParser: true,
  }
);

const informationmodel = require("./INFO");

// const movies= [ { title: 'Jaws', year: 1975, rating: 8 }, { title: 'Avatar', year: 2009, rating: 7.8 }, { title: 'Brazil', year: 1985, rating: 8 }, { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 } ]
// app.all('*',(req,res)=>res.send('okkkk'))
// app.listen(3002,()=>console.log('ok'))

app.get("/movies/read", async (req, res) => {
  //   informationmodel.find({}, (err, result) => {
  //     if (err) {
  //       res.send(err);
  //     }
  //     res.send(result);
  //     console.log(result[1].title);
  //   });

  const movies = await informationmodel.find();

  if (!movies) {
    res.status(404);
    res.send("No Movies");
  }

  res.status(200).json(movies);
});
// listarray.splice(c,1);
//use this way to test the create
//curl "http://localhost:3000/movies/add?title=The%20Matrix&year=1999&rating=8.7"
//if(!title||!year||year.length<4||typeof year!='number'
//http://localhost:3000/movies/create/?title=20Matrix&year=1999&rating=8.7

app.post("/movies/create", async (req, res) => {
  const { title, year, rating } = req.query;

  if (!title || !year || year.length < 4 || isNaN(year)) {
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year",
    });
  } else if (!rating) {
    const rating = 4;
    const newMovie = { title, year, rating };

    const inff = new informationmodel({
      title: title,
      year: year,
      rating: rating,
    });

    await inff.save();
    res.send(movies);
  } else {
    const inff = new informationmodel({
      title: title,
      year: year,
      rating: rating,
    });

    await inff.save();
    res.send(movies);
  }
});

// try the update code by this fomula
// http://localhost:3000/movies/update/1/?title=halabel5amees

app.put("/movies/update/:id", async (req, res) => {
  const id = req.params.id;
  const { title, year, rating } = req.query;

  const movie = await informationmodel.findById(id);

  if (title) {
    movie.title = title;
  }
  if (year) {
    movie.year = year;
  }
  if (rating) {
    movie.rating = rating;
  }

  await movie.save();
  const movies = await informationmodel.find();
  res.send(movies);
});

app.delete("/movies/delete/:id", async (req, res) => {
  const id = req.params.id;

  const movie = await informationmodel.findByIdAndDelete(id);

  res.send(movies);
});

app.get("/movies/read/by-date", async (req, res) => {
  const movie = await informationmodel.find({}).sort({ date: 1 });
  // Return the sorted movies in the response
  res.send(movie);
});

app.get("/movies/read/by-rating", async (req, res) => {
  const movies = await informationmodel.find({}).sort({ rating: -1 });
  res.send(movies);
});

app.get("/movies/read/id/:id", async (req, res) => {
  const id = req.params.id;

  const movie = await informationmodel.findById(id);

  res.send(movie);
});

app.get("/", (req, res) => {
  res.send("ok");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  const currenttime = new Date().toTimeString().slice(0, 5);
  res.send({ status: 200, message: currenttime });
});
app.get(`/hello/:id`, (req, res) => {
  const id = req.params.id || "World";
  res.json({ status: 200, message: `Hello,${id}` });
});
app.get("/search", (req, res) => {
  const search = req.query.s;

  if (search) {
    res.send({ status: 200, message: "ok", data: search });
  } else {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  }
});
app.listen(3000, () => {
  console.log("example app listen on port 3000");
  // console.log(movies.length)
});
