require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./lib/passportConfig')
const bodyParser = require('body-parser');
// Import our Routes
const indexRoute = require('./routes/index')
const appProviderRoute = require('./routes/provider/App')
const appSeekerRoute = require('./routes/seeker/App')

const ProviderPostRoute = require ('./routes/provider/post')
const SeekerPostRoute = require('./routes/seeker/post')

const providerRoute = require('./routes/provider/auth')
const seekerRoute = require('./routes/seeker/auth')
const authRoute = require('./routes/auth')

const providerDetailsRoute = require ('./routes/provider/Details')
const SeekerProfileRoute = require('./routes/seeker/Profile')
const Status = require('./routes/provider/status')


//Initialise our app
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json())


const PORT = 4006


app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use('/public', express.static('public'));

// app.use(express.urlencoded({
//     extended: true
// }))

app.use(session({
    secret: 'Thisisasecret!',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 86400000}
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next){
    res.locals.currentUser = req.user
    next()
})

// Import our Routes
// const indexRoute = require('./routes/index')
// const appProviderRoute = require('./routes/provider/App')
// const appSeekerRoute = require('./routes/seeker/App')

// const ProviderPostRoute = require ('./routes/provider/post')
// const SeekerPostRoute = require('./routes/seeker/post')

// const providerRoute = require('./routes/provider/auth')
// const seekerRoute = require('./routes/seeker/auth')
// const authRoute = require('./routes/auth')

const buildPath = path.join(__dirname, 'build')


app.use(express.static(buildPath))

// Mount our Routes
app.use('/', indexRoute)

app.use('/', ProviderPostRoute)
app.use('/',SeekerPostRoute)


app.use('/', providerRoute)
app.use('/', seekerRoute)
app.use('/', authRoute)
app.use('/',appProviderRoute)
app.use('/',appSeekerRoute)
app.use('/',providerDetailsRoute)
app.use('/',SeekerProfileRoute)
app.use('/', Status)


app.listen(PORT, () => {
    console.log(`The Job portal is open on port ${PORT}`)
})
mongoose.connect(process.env.DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
    console.log('An error occurred', err)
})