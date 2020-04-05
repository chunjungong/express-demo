const express = require("express");
const router = express.Router();

router.all('/list', (req, res)=>{
    res.json({
        list:[
            {
                order: '1',
            },
            {
                order: '2'
            }
        ]
    });
})

module.exports = router;