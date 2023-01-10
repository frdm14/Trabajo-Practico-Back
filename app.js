const express = require('express')
const app = express()
const port = 3000
const mensaje = "Bienvenido al Servidor de Prueba"


app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*punto 1*/

app.get('/:apellido/:nombre', (req, res) => {
    res.send(`${mensaje}, ${req.params.apellido} ${req.params.nombre}`)
});

/*punto 2*/

app.get('/dividir/:dividendo/:divisor', (req, res) => {
    if (req.params.divisor == 0) {
        res.json({error: "No se puede dividir por cero"})
    } else {
        res.json({resultado:"resultado"})
    }
})

/*punto 3*/

app.get('/suma/:x/:y', (req, res) => {
    let resultado = parseInt(req.params.x) + parseInt(req.params.y)

    if (parseInt(req.params.x) >=0 & parseInt(req.params.y) >= 0){
    res.json({Resultado: `${resultado}`})}
})

/*punto 4*/

app.get('/numero', (req, res) => {
    if(req.query.num === "par") {
        res.send("Autorizado")
    } else {
        res.send("No Autorizado")
    }
    })

/*punto 5*/

app.get('/listadodecompras', (req, res) => {
    console.log(req.query)
    res.json(req.query)
})

/* fin de trabajo practico*/

app.listen(port, () => {
    console.log(`Ejemplo ejecutandose http://localhost:${port}/`)
})
