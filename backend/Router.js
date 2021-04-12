const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const signUpTemplateCopy = require("./Models/SignUpModels");
router.post("/signup", (req, res, next) => {
    const signedUpUser = new signUpTemplateCopy({
        studentid: req.body.studentid,
        password:req.body.password
    });
    signedUpUser.save().then((data) =>
        res.json(data).catch((err) => {
            res.json(err);
        })
    );
});

module.exports = router;
