const fs = require("fs");
const path = require("path");

module.exports = {
  devServer: {
    port: 3000,
    https: {
      key: fs.readFileSync(
        path.resolve(`/.office-addin-dev-certs/localhost.key`)
      ),
      cert: fs.readFileSync(
        path.resolve(`/.office-addin-dev-certs/localhost.crt`)
      ),
      ca: fs.readFileSync(path.resolve(`/.office-addin-dev-certs/ca.crt`)),
    },
  },
};
