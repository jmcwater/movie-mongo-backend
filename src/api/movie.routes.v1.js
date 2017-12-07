var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Movie = require('../model/movie.model');

//
// Lijst van alle recepten
//
routes.get('/movies', function(req, res) {
  res.contentType('application/json');
  Movie.find({})
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((error) => res.status(400).json(error));
});

//
// één movie ophalen op naam
//
routes.get('/movies/:name', function(req, res) {
  res.contentType('application/json');
  var query = { name: req.params.name };

  Movie.find(query)
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((error) => res.status(400).json(error));
});

//
// Toevoegen van een recept
//
routes.post('/movies/new', function(req, res) {
  res.contentType('application/json');

  let movie = new Movie(req.body);

  movie.save()
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((error) => res.status(400).json(error));
});

//
// Verwijderen van een recept
//
routes.delete('/movies/:name', function(req, res) {
  res.contentType('application/json');

  let movieName = req.params.name;

  Movie.findOneAndRemove({name: movieName})
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((error) => res.status(400).json(error));
  });

//
// Wijzigen van een recept
//
  routes.put('/movies/:name/:edit', function(req, res) {
    res.contentType('application/json');

    let movieName = req.params.name;
    let updatedMovie = req.body;

    Movie.findOneAndUpdate({name: movieName}, updatedMovie)
    .then((movie) => {
      res.status(200).json(movie);
    })
      .catch((error) => res.status(400).json(error));
    });

module.exports = routes;
