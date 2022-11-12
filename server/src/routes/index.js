const { VerifyAuth } = require("../controller/authController");


module.exports = (app) => {
  app.post("/api/test", async (req, res) => {
    let { authorization } = req.headers;
    VerifyAuth(authorization);
  });
}