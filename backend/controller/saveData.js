const formData = require('../models/database');

const saveDate = async(req , res)=>{
    console.log(req.body);
    try {
        const {firstName, lastName, email, country, streetAddress, city, state, postalCode, comments, candidate, offers, pushNotification} = req.body;
        const exists = await formData.findOne({email});

        if(exists){
            return res.status(400).json({
                success:false,
                message:"User is already exists"
            })
        }

        const newData = await formData.create({
            firstName,
            lastName,
            email,
            country,
            streetAddress,
            city,
            state,
            postalCode,
            comments,
            candidate,
            offers,
            pushNotification
        })

        return res.status(201).json({
            success:true,
            message:"Data saved"
        });

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success:false,
            message:"Something went wrong"
        });
    }
};

module.exports = saveDate;