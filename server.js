const express = require('express'),
port = process.env.PORT || 3000,
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

app.listen(port, (err) => {
  if(err) return console.log(err);
  console.log(`Server is up on port ${port}`);
});
