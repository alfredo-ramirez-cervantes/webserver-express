
const express = require('express')
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;
 
app.use( express.static( __dirname + '/public'))

// Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales' );
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
   
    res.render('home', {
        nombre: 'alfredo'
    });

});

app.get('/about', (req, res) => {
   
    res.render('about');

});
 
// app.get('/', function (req, res) {
//     //res.send('Hola mundo')
//     let salida = {
//         nombre: 'Alfredo',
//         edad: 33,
//         url: req.url
//     };

//     res.send(salida);

// });

// app.get('/data', function (req, res) {
    
//     res.send('Hola Data');
    
// });
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});