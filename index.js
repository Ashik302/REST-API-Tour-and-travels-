// THIS IS INDEX.JS FILE OF THE SERVER 

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
const port = 5000
const product_route = require("./routes/tourr")
app.get('/', (req, res) => {
    res.send("hi i am live");
})

//setting the router.

app.use("/api/products", product_route);

try {
    
    app.listen(port, () =>{
        console.log(`Running in the port ${port}`);
    })
} catch (error) {
    console.log("error listening the port", error)
}