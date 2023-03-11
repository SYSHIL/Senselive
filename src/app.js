const express = require('express');
const app = express();
const path = require('node:path')
const dir = __dirname
const viewsPath = path.join(dir,'../templates/views')

const {getData} = require("./firebase.js")
app.set('view engine', 'ejs');
app.set('views',viewsPath)

app.use(express.static('public'));
const mime = require('mime');

// Serve static files from the public directory
app.use(express.static('public', {
  setHeaders: (res, path) => {
    const type = mime.getType(path);
    res.setHeader('Content-Type', type);
  },
}));
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
});
app.get('/', (req, res) => {
  res.render('index');
});
app.get("/getData", (req, res) => {
  const rakeId = req.query.rakeId;
  const data = getData(rakeId)
  res.render("index",{data})
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
