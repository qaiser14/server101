const express = require("express")
const cors = require("cors")
var posts =[

    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/6/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/7/"
        ],
        "species": [
            "https://swapi.dev/api/species/1/"
        ],
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
    }
]


var cvdata = [
    
    
    {
                cvname: "QAISER MALIK",
                Education: "MERN STACK DEVELOPER",
                Experiance:"WebDevers INSTRUCTOR",
                contact: "qaiser_a_malik@hotmail.com"
    }
]

const app = express()
app.use(cors())
app.get("/user", (req,res)=>{
    res.send({  name:"LUKE SKYWALKER",
                
    })  
})

app.get("/cv", (req, res)=>{
    res.send(cvdata)
})

app.get("/posts",(req,res)=>{
    res.send(posts)
})

app.listen("4000",()=>{

    console.log("server is running successfully");
})

// install cors to allow server for fetching the data
// npm i cors