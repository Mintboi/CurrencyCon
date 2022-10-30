var express = require('express');
var router = express.Router();
const currencyModel = require("../models/currencyModel");

// Router gets /currency requests and answers with EJS files
router.route('/')
    .get((req, res, next) => {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "goWT86wt3NTw699riO3Cx9tpmYw3NCyG");

        var requestOptions = {
            method: 'get',
            redirect: 'follow',
            headers: myHeaders
        };
        // currency api using fetch returns results between start_date & end_date currently to ejs file for raw display
        // in process of converting to json and pushing to mongodb
        fetch("https://api.apilayer.com/exchangerates_data/fluctuation?start_date=2021-10-30&end_date=2022-10-30", requestOptions)
            .then(response => response.text())
            .then(result => currencyModel.create(result)
                .then((currenciescreated) => {
                    report.find()
                        .then((currenciesfound) => {
                            res.render('currentreport', { 'reportList': reportsfound, title: 'All reports' });
                        }, (err) => next(err))
                        .catch((err) => next(err));
                }, (err) => next(err))
                .catch((err) => next(err)))
    });

module.exports = router;
