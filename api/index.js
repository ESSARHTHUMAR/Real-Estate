import express from "express"

const app = express();

app.listen(3000, () => {
    console.log("Hii");
})

app.get("/", (req,res) => {
    console.log(res);
})