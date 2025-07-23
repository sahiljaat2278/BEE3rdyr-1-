const express = require('express');
const app = express();
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
//   res.send('Hello, World!');

});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});