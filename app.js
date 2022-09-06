const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')

const indexRouter = require('./routes/indexRouter')

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use('/', indexRouter)


app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`)
})