const mongoose = require('mongoose')


mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/projetdb').then
{
    console.log('connected bd ');
}
module.exports=mongoose