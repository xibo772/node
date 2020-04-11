const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.use(function (req, res, next) {
    const proxy = req.query.proxy;
    if (proxy) {
        req.header.cookie = req.header.cookie + `_proxy_${proxy}`;
    }
    next();
});

const port = process.env.Port || 3000;
app.listen(port, () => {
    console.log(`server running @http://localhost:${port}`);
});

module.exports = app;