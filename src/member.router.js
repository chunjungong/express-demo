const express = require("express");
const router = express.Router();

router.all('/list', (req, res)=>{
    res.json({
        list:[
            {
                member: '1',
            },
            {
                member2: '2'
            }
        ]
    });
})

module.exports = router;