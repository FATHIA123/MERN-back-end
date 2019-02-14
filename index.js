const express = require("express")
const parser = require('body-parser')
const mongoose = require('./db/gif.js')
// const gifData = require('./seed.json')


const gif = mongoose.model('Gif')

const app = express()
const cors = require('cors')

app.use(parser.json())
app.use(cors())



app.get("/", (req, res) => {
    // response.send("Hello WOorld")

   
        gif.find()
          .then((gifs) => {
            res.json(gifs)
          })
          .catch((err) => {
            console.log(err)
          })

   } )

// app.listen(4000, () => {
//   console.log("app listening on port 4000")
// })


app.set('port', process.env.PORT || 4001)

app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')}`)
})
