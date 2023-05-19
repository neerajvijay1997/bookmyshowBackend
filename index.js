const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8000;
const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require('cors')
app.use(cors())

app.post('/api/booking', async (req, res) => {
  console.log(req.body)
  const body = req.body
  const data = {
    movie: body.movie,
    slot: body.slot,
    seat: {
      A1: body.A1,
      A2: body.A2,
      A3: body.A3,
      A4: body.A4,
      D1: body.D1,
      D2: body.D2,
    }

  }
  try {
    const booking = await connection.create(data)
    console.log(booking)
    if (booking) {
      res.status(200).json({
        success: true,
        message: "Succesfully Data added"
      })
    } else (
      res.status(200).json({
        success: false,
        message: "Data not added"
      }))
  } catch (error) {
    console.error("error occurred:", error);
    res.status(400).json({
      success: false,
      message: error
    })
  }

})

app.get('/api/booking', async (req, res) => {
  try {
    let data = await connection.find().sort({ _id: -1 }).limit(1)
    if (data.length !== 0) {
      res.status(200).json({
        success: true,
        message: data
      })
    } else {
      res.status(200).json({
        success: false,
        message: "No previous Booking "
      })
    }
  } catch (error) {
    console.error("error occurred:", error);
    res.status(400).json({
      success: false,
      message: error
    })
  }
})

app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app;   