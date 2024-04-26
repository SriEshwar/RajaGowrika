const express = require('express');
const bodyParser = require('body-parser');

const axios=require('axios');
const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/submit', (req, res) => {
    const { username, password, mobile, email } = req.body;
    const userdata={
        username,
        password,
        mobile,
        email
    }
   
axios.post("http://localhost:3000/users",userdata).then(data=>{
    res.send("user data saved success")
}).catch(err=>console.log("error saving the data",err))
});

app.get("/getuser",(req,res)=>{

    axios.get("http://localhost:3000/users").then(dbresponse=>{
        res.json(dbresponse.data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post("/changePassword",(req,res)=>{

const{id,pass}=req.body;
const password={
    pass
}

console.log(password);

axios.patch(`http://localhost:3000/users/${id},password`).then(dbresponse=>{
    res.send("password updated")
}).catch(err=>console.log(err))


})

//axios.post().then().catch()

// Start the server
app.listen(port, () => {
    console.log("Server is listening at http://localhost:${port}");
});


//  <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>task</title>
// </head>
// <body>
//     <h2>User info form</h2> <!--http://localhost:3000/submit-->
//     <form id="userInfoForm" action="/submit" method="POST">
//         <label for="username">Username:</label><br>
//         <input type="text" id="username" name="username"><br>
       
//         <label for="password">Password:</label><br>
//         <input type="password" id="password" name="password"><br>
       
//         <label for="mobile">Mobile No:</label><br>
//         <input type="tel" id="mobile" name="mobile"><br>
       
//         <label for="email">Email :</label><br>
//         <input type="email" id="email" name="email"><br><br>
       
//         <input type="submit" value="Submit">
//     </form>

//     <a href="/getuser">see user record</a>

//     <form action="/changePassword" method="post">

//         <label for="username">id</label><br>
//         <input type="text" id="username" name="id"><br>
       
//         <label for="password">Password:</label><br>
//         <input type="password" id="password" name="pass"><br>
//         <input type="submit" value="changePassword">
//     </form>
// </body>
// </html>