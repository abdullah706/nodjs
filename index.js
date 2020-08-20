const express = require('express');
const port = 3002;
const app = express();

app.get('/',  (req, res) => {
  res.send('Authors API');
});
app.get('/authors/1/',  (req, res) => {
    res.send('Lawrence Nowell, UK');
  });
  app.get('/authors/2/',  (req, res) => {
    res.send('William Shakespeare, UK');
  });

  app.get('/authors/3/',  (req, res) => {
    res.send('Charles Dickens, US');
  });
  app.get('/authors/4/:name',  (req, res) => {
      console.log('GET //authors/4/:name');
   
    console.log('req.params', req.params);
   
    res.send('Oscar Wilde, UK');

  });
  app.get('/authors/1/books/',  (req, res) => {
    res.send('Beowulf');
  });
  app.get('/authors/2/books/',  (req, res) => {
    res.send('Hamlet, Othello, Romeo and Juliet, MacBeth');
  });

  app.get('/authors/3/books/',  (req, res) => {
    res.send('Charles Dickens, US');
  });
  app.get('/authors/4/books/:name',  (req, res) => {
      console.log('GET /authors/4/books/:name');
   
    console.log('req.params', req.params);
   
    res.send('The Picture of Dorian Gray, The Importance of Being Earnes');

  });
  app.get('/cars/',  (req, res) => {
    res.send('error');
  });
  app.get('/authors/12133',  (req, res) => {
    res.send('The author with the ID 12133 does not exist');
  });

  app.get('/authors', (req, res) => {
    var info = {
        name: 'Lawrence Nowell',
        nationality: 'UK'
        
    }
    res.json(info);

    // or
    /* res.send(JSON.stringify({
        string_value: 'StackOverflow',
        number_value: 8476
    })) */

  //you can add a status code to the json response
   /* res.status(200).json(info) */
});
app.get('/authors/id/books', (req, res) => {
    var info = {
        
        books: ["Beowulf"]
        
    }
    res.json(info);

    // or
    /* res.send(JSON.stringify({
        string_value: 'StackOverflow',
        number_value: 8476
    })) */

  //you can add a status code to the json response
   /* res.status(200).json(info) */
})




app.listen(port,  () => {
    console.log(`Server started port:${port}`);
});