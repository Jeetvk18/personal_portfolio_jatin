const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    if(
        email==="admin@portfolio.com" &&
        password==="admin123"
    ){

        const token = jwt.sign(
            {email},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );

        return res.json({
            success:true,
            token
        });

    }

    res.status(401).json({
        success:false,
        message:"Invalid Credentials"
    });

});

module.exports = router;