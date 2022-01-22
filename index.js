const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`, (err) => {
        if (err) {
          console.log(err);
          res.end(err.message);
        }
      });});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;