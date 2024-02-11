const express = require("express")
const mongoose= require("mongoose")
const tasksRoutes = require('./routes/taskRoutes')

const app = express();
const port = 3000;

//Middleware
app.use(express.json());

//DB Connection
mongoose.connect("mongodb+srv://islam_majeed:islam1998@cluster0.aj4hilc.mongodb.net/?retryWrites=true&w=majority").then(()=>{
     console.log("connected successfully")
}).catch((error)=>{
     console.log("error with connected", error)
})


app.use(tasksRoutes)

app.listen(port, ()=> {
     console.log(`I am listening at port ${port}`);
})


