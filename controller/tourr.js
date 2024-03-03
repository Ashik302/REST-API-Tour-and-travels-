// THIS IS THE MAIN FILE TOURR.JS

const tour = require('../tour.json')

const getAllTour = async (req, res) => {
    res.status(200).json(tour)
}

const getCatagoryTour = async (req, res) => {
    const { category } = req.params;
    // console.log(category)
    // console.log(tour[category])
    if (category) {
        let newData;
        let data = tour[category];
        const value = req.query;
        console.log(typeof (value['price']))

        if(data){
            if (value) {
    
                // console.log("data", data)
                const filteredData = data.filter(item => {
                    for (const key in value) {
                        const queryValue = value[key];
                        const dataValue = item[key];
                        // Convert query parameter to the same data type as data value
                        if (typeof dataValue === 'number') {
                            value[key] = parseInt(queryValue, 10);
                        } 
                        // Convert string representations of boolean values to actual boolean values
                        if (typeof dataValue === 'boolean') {
                            value[key] = String(queryValue).toLowerCase() === 'true';
                        }
                        
                        // You can add additional conversions for other data types as needed
    
                        // Perform comparison after conversion
                        if (dataValue !== value[key]) {
                            return false;
                        }
                    }
                    return true;
                });
                res.status(200).json(filteredData);
    
            } else {
                res.status(200).json(tour[category]);
            }
        }else {
            res.status(404).json({ message: "Category not found" });
        }

    } else {
        res.status(404).json({ message: "Category not found" });
    }
}


const filterTourData = async (res, key, data, value) => {
    data.map((item) => {
        if (item[key] === value[key]) {
            console.log(item)
            res.status(200).json(item)
        }
    })
}


const getAllTestingTour = async (req, res) => {
    res.status(200).json({ msg: "Getting all Testing tours" })
}

module.exports = { getAllTour, getAllTestingTour, getCatagoryTour };