//import express
const express = require("express");
//SearchController Router object
const SearchController = express.Router();
// import axios
const axios = require('axios');


// hit the url to get the data
let hotels_url = "http://fake-hotel-api.herokuapp.com/api/hotels";
const hotels = axios.get(hotels_url);


SearchController.get("/", (request, response) => {
    hotels.then(res => {
        response.send(JSON.stringify(res.data));
      })
      .catch(error => {
        console.log(error);
      });
});


SearchController.post("/", (request, response) => {
  let search_results = [];

  // Filter with the price & Date range which user sent or using default values
  let price_start = request.body.price_from ? Number(request.body.price_from) : 0;
  let price_end = request.body.price_to ? Number(request.body.price_to) : Number.MAX_SAFE_INTEGER;

  let date_start = request.body.date_from ? new Date(request.body.date_from) : new Date(0);
  // 8640000000000000 => Maximum Date [Common Era] https://en.wikipedia.org/wiki/Common_Era
  let date_end = request.body.date_end ? new Date(request.body.date_end) : new Date(8640000000000000);


  hotels.then(res => {
    res.data.forEach((hotelObj) => {
      if( hotelObj.name.toLowerCase().includes(request.body.name.toLowerCase().trim())  && 
          hotelObj.city.toLowerCase().includes(request.body.city.toLowerCase().trim())  &&
          hotelObj.price >= price_start && 
          hotelObj.price <= price_end &&
          new Date(hotelObj.date_start).getTime() >= date_start.getTime() && 
          new Date(hotelObj.date_end).getTime() <= date_end.getTime()
        ){
        search_results.push(hotelObj);
      }
    });

    response.send(JSON.stringify(search_results));
  })
  .catch(error => {
    console.log(error);
  });
});


SearchController.post("/order", (request, response) => {
  hotels.then(res => {
    if(request.body.order === 'price'){
      response.send(JSON.stringify(res.data.sort((obj, next) => (obj.price > next.price) ? 1 : -1)));
    }
    else{
      response.send(JSON.stringify(res.data.sort((obj, next) => (obj.name > next.name) ? 1 : -1)));
    }
  })
  .catch(error => {
    console.log(error);
  });
});


module.exports = SearchController;