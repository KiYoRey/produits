const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');

const api = process.env.API_URL;
const productsRouter = require('./routes/product.router');

app.use(bodyparser.json());
app.use(morgan('tiny'));


//routers
app.use(`${api}/products`,productsRouter);



//connection
mongoose.connect(process.env.CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'products'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})


app.listen(5000, () => {
    console.log(`Server is listening to 3000 `)
})


// app.listen(server.PORT, () => {
//     console.log(`Server is listening to ${server.hostname}:${server.PORT}`)
// })