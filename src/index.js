const express = require ('express');
const path = require("path");
const collection = require("./config");




const app = express();
//json
app.use(express.json());
app.use(express.urlencoded({extended: false}));




// usar ejs
app.set('view engine', 'ejs');


//archivos estaticos
app.use(express.static("public"));


app.get("/", (req, res) =>{
    res.render("login");
});


app.get("/signup", (req, res) =>{
    res.render("signup");
});




// registro de usuario


app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };


    try {
        const userdata = await collection.insertMany([data]); // Nota: collection.insertMany espera un array, por lo que envolvemos el objeto data en un array
        console.log(userdata);
        res.send("Usuario registrado correctamente");
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).send("Error al registrar el usuario");
    }
});


const port = 5000;
app.listen(port, () =>{
    console.log(`server on port: ${port}`);
})
