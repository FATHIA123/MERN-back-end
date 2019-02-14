const mongoose = require('./gif')
const gifData = require('./seed.json')
const gif = mongoose.model('Gif')


gif.remove({})
  .then(() => {
    gif.collection.insert(gifData)
      .then((gifs) => {
        console.log(gifs)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
// in local directory uninitionalize git
// git init again 
// push it to the repository I have on git hub 