// const { mark } = require('regenerator-runtime');
// const request = require('supertest');

// const server = 'http://localhost:3000';
// /**
//  * Read the docs! https://www.npmjs.com/package/supertest
//  */

// describe('Route integration', () => {
//   describe('/', () => {
//     describe('GET', () => {
//       // Note that we return the evaluation of `request` here! It evaluates to
//       // a promise, so Jest knows not to say this test passes until that
//       // promise resolves. See https://jestjs.io/docs/en/asynchronous
//       it('responds with 200 status and text/html content type', () => {
//         return request(server)
//           .get('/')
//           .expect('Content-Type', /text\/html/)
//           .expect(200);
//       });
//     });
//   });

//     // change to match our backend path 
//     describe('/markets', () => {
//     describe('GET', () => {
//       it('responds with 200 status and application/json content type', () => {
//           return request(server)
//             // change to match our backend path routes
//           .get('/markets')
//           .expect('Content-Type', /json/)
//           .expect(200);
//       });