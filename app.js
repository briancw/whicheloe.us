const express = require('express')
const historyFallback = require('connect-history-api-fallback')
const path = require('path')
const app = express()
const port = process.env.PORT || 3005
app.use(historyFallback())

app.use(express.static(path.resolve(`${__dirname}/public`)))

app.listen(port, err => {
    if (err) {
        throw err
    }

    console.log('Listening on port ' + port)
})
