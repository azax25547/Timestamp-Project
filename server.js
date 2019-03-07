let express = require('express');
let app = express();

let dateRoute = require("./routes/date");

app.use(express.static("public"));
app.use(dateRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("App is running at PORT", PORT)
})