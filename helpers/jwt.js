// const expressJwt = require("express-jwt");

// function jwt() {
//   const secret = process.env.secret;
//   // const api = process.env.API_URL;
//   return expressJwt({
//     secret,
//     algorithms: ["HS256"],
//     // isRevoked: isRevoked,
//   }).unless({
//     path: [
//       { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
//       { url: /\/api\/v1\/categories(.*)/, methods: ["GET", "OPTIONS"] },
//       `${api}/users/login`,
//       `${api}/users/register`,
//     ],
//   });
// }

const expressJwt = require("express-jwt");

function authJwt() {
  const secret = process.env.secret;
  return console.log(
    expressJwt({
      secret,
      algorithms: ["HS256"],
    })
  );
}

module.exports = authJwt;
