const connectToMongo =require('./db')
const express = require('express')
const cors=require('cors')
connectToMongo();

const app = express()
const port = 5000

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/resume',require('./routes/resume'))
app.use('/api/tempelates',require('./routes/tempelates'))


app.listen(port, () => {
  console.log(`Backend of Resume builder listening on port ${port}`)
})