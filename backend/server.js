
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const userrouter = require("./routes/userroute");
const electionrouter = require("./routes/electionroute");
const candidaterouter = require("./routes/candidateroute");
const voterrouter = require("./routes/voterouter");
const dproute = require("./routes/dproute");
const path = require('path');



const cors = require('cors');
require('dotenv').config();

const app=express();
const port=process.env.PORT || 3000;

app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once('open',()=>{
    console.log('connected to MongoDB database');
});

app.use(cors());

//userRoute
app.use("/api/user", userrouter);
app.use("/api/elections", electionrouter);
app.use("/api/candidate", candidaterouter);
app.use("/api/voter", voterrouter);
app.use("/api/image", dproute);

app.use("/uploads", express.static("uploads"));

app.listen(port,()=>{
    console.log(`server is running http://localhost ${port}`);
});