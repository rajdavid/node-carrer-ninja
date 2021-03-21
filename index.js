import express from 'express'
import bodyparser from 'body-parser'
import './helper/db_connect.js'
import controller from './controller/controllers.js'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())


// //app.get('/', (req, res) => {
//     res.send("Noter working")
// })

//app.post('/userLogin', controller.userLogin)

// To add new note
//app.post('/addNote', controller.addNote)

// To send updated Notes
//app.post('/getUpdatedNotes', controller.getUpdatedNotes)

// To edit notes
//app.post('/editNote', controller.editNote)

// To delete a note
//app.post('/deleteNote', controller.deleteNote)


// To change a priority
//app.post('/changePriority', controller.changePriority)

//app.post('/gotToken', controller.gotToken)

app.listen(process.env.PORT || 4000, () => {
    console.log('Server listening on port 4000')
})

