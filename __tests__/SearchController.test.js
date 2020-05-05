
const app = require("./../__mocks__/SearchController"); // Link to Mock Controller File


it("The end point url is written correct", () => {
  expect(app.endpoint_url).toBe('http://fake-hotel-api.herokuapp.com/api/hotels');
});
