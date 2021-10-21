require('dotenv').config()
const express = require('express')
const cors = require('cors')
// const fileUpload = require('express-fileupload')
// const router = require('./routes/index')
// const errorHandling = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const { readFile, writeFile, stat, unlink } = require("fs").promises;
const fs = require('fs');
const { default: axios } = require('axios');

const PORT = process.env.PORT || 5000

const app = express()

app.get('/api/v1/users', async (req, res) => {
    const filePath = path.join(__dirname, 'test.json')

    try {
        await fs.promises.access(filePath, fs.constants.R_OK)
        return res.sendFile(filePath)
    } catch (err) {
        err => err.json({message: 'Всё пропало!'})
    }
    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
        {responseType: 'stream'}
    )
    console.log('be_service')
    data.pipe(fs.createWriteStream(filePath))
    data.pipe(res)
})

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
// app.use(fileUpload({}))
// app.use('/api', router)

// app.use(errorHandling)

const start = async () => {
    try {
        // await sequelize.authenticate()
        // await sequelize.sync()
        app.listen(PORT, () => console.log(`Server was started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()