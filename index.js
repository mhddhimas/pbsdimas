const express = require('express')
const { connect } = require('./config')
const app = express()
const port = 8080
const db = ('./config.js')
const response = ('./response.js')


app.get('/mahasiswa', (req, res) => {
  res.send('Hello World!')

  db.query('SELECT * FROM `tb_mahasiswa`', function (error, results, fields) {
    if (error) throw error;
    console.log('The soluton s ',results[0].solution);
    // connected!
  });
})


app.post('/mahasiswa/post', (req, res) => {
    res.send('ini post data')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})