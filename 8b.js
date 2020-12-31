var express = require('express');

var app = express();

app.get('/form', function(req, res){

    res.sendFile('/form.html', { root: '.' });
});

app.post('/formdata', (req, res) => {
    console.log(req);
    res.send("form submitted");
  })

app.listen(3000);