const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    console.log(req.body);
    const selectedValue = req.body.selectCalMethod;
    const valueOne = Number(req.body.n1);
    const valueTwo = Number(req.body.n2);
    let returnValue = "";
    console.log(valueOne);
    console.log(valueTwo);
    switch (selectedValue) {
        case 'add':
            returnValue = valueOne + valueTwo;
            break;
        case 'subtract':
            returnValue = valueOne - valueTwo;
            break;
        case 'multiply':
            returnValue = valueOne * valueTwo;
            break;
        case 'divide':
            returnValue = valueOne / valueTwo;
            break;

    }
    res.send(`
    <div>
    <p>The final result is: ${returnValue} </p> <br>
    <a href ="/">Another Calculation </a>
    </div>    `
    );
});

app.listen(8000, () => { console.log("port listing") });