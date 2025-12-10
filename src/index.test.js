// const app = require("express")();
// const supertest = require("supertest");
// const request = supertest(app);


// app.get("/", function (req, res) {
//     res.status(200).send("practise with kubernetes");
// });


// describe("GET /", function () {
//     it("should return 200 OK", function (done) {
//         request
//             .get("/")
//             .expect(200)
//             .end(function (err, res) {
//                 if (err) return done(err);
//                 done();
//             });
//     });
// });


const assert = require('assert');

describe('CI Agent Verification', function() {
  it('should FAIL intentionally', function() {
    // FAILURE SCENARIO: Expecting 1+1 to be 5
    // The CI Agent should report: "AssertionError: 2 == 5"
    assert.equal(1 + 1, 5); 
  });
});
