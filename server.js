let app = require('./app');

app.enable('case sensitive routing');
app.listen(8080, ()=> console.log('Listening on port 8080'));
