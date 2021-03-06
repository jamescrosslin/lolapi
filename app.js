
const express = require("express")
const fetch = require("node-fetch")
const app = express()



app.get("/:id", async (req, res) =>{
  const lolurl =
  `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.id}?api_key=RGAPI-cfb256f7-e89d-43ed-86f5-710adb74eeea`;
  const response = await fetch(lolurl);
  const data = await response.json();
  res.json(data)
})

app.listen(3000, ()=>{
  console.log("Server is listening on port 3000")
})
