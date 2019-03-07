let express = require('express');
let router = express.Router();

router.get('/api/timestamp', (req,res) => {
    res.send({
        "unix": new Date().getTime(),
        "utc": new Date().toUTCString()
    })
});

router.get('/api/timestamp/:date_string', (req, res) => {
    try{
        if (Number(req.params.date_string) === "NaN"){
            res.send({"error":"Invalid Date"})
        }
        else {
           let date = Number(req.params.date_string);
            res.send({
                "unix": new Date(date).getTime(),
                "utc": new Date(date).toUTCString()
            })
        }
    }catch (e) {
        res.send({"error":e});
    }
});




module.exports = router;