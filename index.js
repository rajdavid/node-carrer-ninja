import express from 'express'
import bodyparser from 'body-parser'
import './helper/db_connect.js'
import UserController from './controller/userController.js'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())




app.get('/', (req, res) => {
    res.send("Noter working")
})
app.post("/createUser",UserController.createUser);



app.listen(process.env.PORT || 4000, () => {
    console.log('Server listening on port 4000')
})

