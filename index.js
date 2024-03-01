const express = require('express');


const app = express();

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