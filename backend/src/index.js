const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    "mongodb+srv://admin:EM6l06jerWkT0eWb@cluster0-1ens9.gcp.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
app.use(express.json());
app.use(require('./routes'));

app.listen(3000, ()=> {
    console.log('Server subiu porta 3000')
})
