const express = require("express");
const app = express.Router();
const getTweet = require("../util")



app.get('/tests', async(req, res) => {
  // const tests = fs.getFiles(../Tests)

  const tests = [
    {
      name: 'test1',
    },
    {
      name: 'test2'
    }
  ]
  res.json(tests)
})

app.get('/tests/test1/manufacturers', async(req, res) => {
  // const manufacturers = await fs.getFolderAgain(.../tests/test1)
  const manufacturers = [
    {
      name: 'caterpillar'
    }, 
    {
      name: 'butterfly'
    }
  ]
  res.json(manufacturers)
})

app.post('/tests/1/start', async(req, res) => {
  //crazy medium article about starting up python in node
  //const test1Result = python.run(test1)
  
  res.json(test1Result)
  

}) 




// app.get('/tweet', async(req, res) => {
//   const tweet = await getTweet()
//   res.json(tweet)
// })



module.exports = app