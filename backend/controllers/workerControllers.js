
//Adding Workers API
const Worker = require('../models/workerModel');
const addWorker= async(req,res) => {
    try {
        const{name,email,password,phone,speciality,degree,image,address,experience,fees,about}=req.body;
    } catch (error) {
        
    }
}