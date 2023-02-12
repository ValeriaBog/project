const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        name:'J',
        lastName:'K'
    })
  })


app.post('/users', (req, res) =>{
console.log(req.body)
res.json({
    ...req.body
});
}
)

app.listen(port);
