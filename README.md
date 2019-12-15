# subscription-app
A sample app for purchasing a subscription written in ReactJS for front-end and NodeJS for back-end

## Setup
Please make sure [NodeJS](https://nodejs.org/en/) is installed in your environment.

* `npm install` install all dependence
* `npm run start:server` starts local server on port 8080
* `npm start` starts app on port 300

Then go to `localhost:3000`

## API Server
The API server is provided in the `./src/api` folder. The following routes are available:

header: 
```json5
{
  'Content-Type': 'application/json',
  currency: 'USD'
}
```
>:information_source: empty current in header will be set to USD by default

`GET /api/current`
Returns an object of subscription information.

response:
```json5
{
  basic:  1,
  good:   10,
  better: 100,
  best:   1000
}
```

`PUT /api/current`
Update current subscription based on given data.

body:
```json5
{
  seats: 5,
  plan: 'best'
}
```

response:
```json5
{
  basic:  1,
  good:   10,
  better: 100,
  best:   1000
}
```

`POST /api/preview`
Returns an object of subscription information preview based on given data.

body:
```json5
{
  seats: 5,
  plan: 'best'
}
```

response:
```json5
{
  basic:  1,
  good:   10,
  better: 100,
  best:   1000
}
```

## future Enhancements supported
- [x] I have rewritten the entire back-end with NodeJS since it works better with React app
- [x] I have included a modal to handle failures of API
- [x] I have checker to prevent invalid seat counts
- [x] My structure should support multiple products since product is a separated component
- [x] I have a page (empty) specifically for user profile since as contact information and payment information
- [x] I have add support for multiple currencies for both front-end and back-end

Third Party Libraries 
* [Bootstrap](https://github.com/twbs/bootstrap)
* [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)


## License
[MIT License](https://github.com/AlexHHsiao/subscription-app/blob/master/LICENSE)
