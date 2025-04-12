import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';


//app configuration
const app = express();
const PORT = process.env.PORT || 4000;
// connectDB()
connectCloudinary()

//middleware
app.use(express.json());//the request body is help to pass the data in json format
app.use(express.urlencoded({ extended: true }));//the request body is help to pass the data in urlencoded format
app.use(cors());//this is used to allow cross-origin requests from the client(frontend) to the server(backend)
app.use(express.static('public'));//this is used to serve static files from the public folder

//api endpoints
app.get('/', (req, res) => {
    res.send('Api working');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})