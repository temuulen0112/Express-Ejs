const express = require('express');
const app = express();

const apiRoutes = require("./routes/api");
const adminRoutes = require("./routes/admin");

app.use(express.json());
app.use(express.static('public'));

app.use("/api", apiRoutes);
app.use("/", adminRoutes);

const port = 3001;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});