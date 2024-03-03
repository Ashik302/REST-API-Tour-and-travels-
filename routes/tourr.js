//THIS FILE IS TOUR.JS TO MANAGE THE ROUTES UN API

const express = require('express')
const router = express.Router();
const {getAllTour, getAllTestingTour, getCatagoryTour} = require("../controller/tourr");

router.route('/').get(getAllTour);
router.route('/:category').get(getCatagoryTour);
router.route('/testing').get(getAllTestingTour);

module.exports = router;