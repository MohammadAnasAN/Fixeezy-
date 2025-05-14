import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import workerModel from "../models/workerModel.js";
import multer from "multer";
import jwt from "jsonwebtoken";

//api for adding workers

const addWorker = async (req, res) => {
    

    try {
        const{name,email,password,speciality,degree,address,experience,fees,about}=req.body;
        const imageFile= req.file

        //checking all data is present
        if (!name || !email || !password || !speciality || !degree  || !address || !experience || !fees || !about) {
            return res.json({ success: false, message: "Please fill all the fields" });
        }

        // Validating Email Format
        if (!validator.isEmail(email)) {
            console.log("Error: Invalid email format.");
            return res.json({ success: false, message: "Please Enter a valid email" });
        }

        if (password.length < 8) {
            console.log("Error: Weak password.");
            return res.json({ success: false, message: "Please Enter a strong password" });
        }

        // Hashing worker password
        console.log("Hashing password...");
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload image to Cloudinary only if it exists
        let imageUrl = null
        if (imageFile) {
            console.log("Uploading image to Cloudinary...");
            try {
                const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
                imageUrl = imageUpload.secure_url;
            } catch (error) {
                console.log("Cloudinary upload error:", error);
                return res.json({ success: false, message: "Image upload failed" });
            }
        }

          // Preparing workers data
          console.log("Preparing workers data...");
          // Parsing address JSON string to an object
          const addressObj = JSON.parse(address);
          console.log('Parsed address: ', addressObj);

          const workerData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: addressObj,
            date: Date.now()
        };


        // Saving new worker
        console.log("Saving workers to database...");
        const newWorker = new workerModel(workerData);
        await newWorker.save();
        console.log("Worker saved successfully.");

        // Response
        res.json({ success: true, message: "Worker Added" });
        

    } catch (error) {
        console.log("Error in addWorker:", error);
        res.json({ success: false, message: error.message });
    }
};




//admin login

const adminLogin = async (req, res) => { 
    try {

        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: "Invalid Credentials" })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
 }  



 
export { addWorker, adminLogin };

