const express = require('express'),
D = __dirname,
app = express(),
{urlencoded} = require('body-parser');
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.removeHeader('x-powered-by');
  next();
});

app.use(urlencoded({extended:true}));
app.use(express.static(`${D}/public`));

app.get('*', (req, res) => {
  res.sendFile(`${D}/public/index.html`);
});

app.listen(3000, (err) => {
  if(err) console.log(err);
  console.log("Server up on port 3000!");
});
