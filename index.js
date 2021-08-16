const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

const User = require("./models/User")

app.get("/users", (request, response) => {
  User.query().then(users => {
    response.json({ users })
  })
})

app.post("/signup", (request, response) => {
  User.signup(request.body.user).then(user => {
    response.json({ user })
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
