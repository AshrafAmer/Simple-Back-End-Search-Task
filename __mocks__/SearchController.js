jest.mock('./SearchController');

let endpoint_url = "http://fake-hotel-api.herokuapp.com/api/hotels"; // test it as string


const get_request = () => {
    return Promise.resolve({
        "id": "d943b982-572b-4b16-961b-fbf7a2a5e02f",
        "name": "sint qui sit",
        "country": "Turks and Caicos Islands",
        "city": "Georgianaland",
        "price": 359,
        "images": [
        "http://lorempixel.com/640/480/city?83064",
        "http://lorempixel.com/640/480/city?75906"
        ],
        "date_start": "2020-05-01T11:28:34.408Z",
        "date_end": "2020-08-14T15:49:45.806Z",
        "stars": 1,
        "rating": 3.407409777304869    
        });
    }

exports.endpoint_url = endpoint_url;