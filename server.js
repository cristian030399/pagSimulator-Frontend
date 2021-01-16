const express = require('express');

const app = express();

// function logger(req, res, next) {
//     console.log('Route Received: ' + req.protocol +'://' + req.get('host'));
//     next();
// }

// app.use(express.json());
// app.use(logger);

app.use(express.static("./dist/pagSimulator-Frontend"));
app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/pagSimulator-Frontend/" });
});
app.listen(process.env.PORT || 8080);