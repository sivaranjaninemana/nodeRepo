const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const staticPath = path.join(__dirname,'../public')
const partialsPath = path.join(__dirname,'/partials')

app.use(express.static(staticPath))

app.set('view engine','hbs')
hbs.registerPartials(partialsPath)


// app.get('', (req,res) => {
//     res.send('Hello friend!')
// })

app.get('', (req,res) => {
    res.render('index', {
        name: 'SR',
        age: 27
    })
})

app.get('/json', (req,res) => {
    res.send({
        name: 'Siva',
        age: 39
    })
})

const emp1 = {
    name: 'Emp1',
    id: 123
}

const displayEmp = ({name = 'emp#', id}={}) =>{
    console.log('name : '+ name + 'id: '+id)
}

app.get('/object', (req,res) => {
    displayEmp(emp1)
    res.send(emp1)
})

app.listen(9080,() => {
    console.log('Server is running on port 9080')
})