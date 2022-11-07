var express = require('express');
var axios = require('axios');
var router = express.Router();
const currencyModel = require("../models/currencyModel");

// Router gets /currency requests and answers with EJS files
router.route('/')
    .get((req, res, next) => {
        var myHeaders = new Headers();
<<<<<<< HEAD
        myHeaders.append("apikey", "API Token goes here");
=======
        myHeaders.append("apikey", "token goes here");
>>>>>>> 09f5784 (Removed API key)

        var requestOptions = {
            method: 'get',
            redirect: 'follow',
            headers: myHeaders
        };
        // currency api using fetch returns results between start_date & end_date currently to ejs file for raw display
        // in process of converting to json and pushing to mongodb

        axios.get('https://api.apilayer.com/exchangerates_data/fluctuation?start_date=2021-10-30&end_date=2022-10-30', {
            headers: {
<<<<<<< HEAD
                "apikey": "API Token goes here"
=======
                "apikey": "token goes here"
>>>>>>> 09f5784 (Removed API key)
            }
        })
            .then(response => {
                const { start_date, end_date, base, rates } = response.data;
                const modelledData = {
                    start_date: start_date,
                    end_date: end_date,
                    base: base,
                    rates: rates.AED
                }

                currencyModel.create(modelledData)
                    .then((currenciesCreated) => {
                        currencyModel.find()
                            .then((currenciesFound) => {
                                res.render('currencies', { 'currenciesList': currenciesFound, title: 'All Reports' });
                            }).catch(err => next(err))
                    }).catch(err => next(err))
            }).catch(err => next(err))
    });

module.exports = router;
