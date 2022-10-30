const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var CurrencyScheme = new Schema({
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    base: {
        type: String,
        required: true
    },
    rates: {
        type: Array,
        required: true
    }
},
    {
        timestamps: false
    });
var currency = mongoose.model('Currencies', CurrencyScheme);

module.exports = currency;