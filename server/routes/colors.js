const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.json("Red, Blue, Green, Purple")
})

router.get("/:name", (req, res) => {
    res.json(`Colors is working`)
})

router.post("/:name/css-styles", (req, res) => {
    res.json("css style created")
})

router.delete("/:name/css-styles/:style", (req, res) => {
    res.json("css style deleted")
})

module.exports = router
