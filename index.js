
const http = require(`http`);

const PORT = 5000

const app = http.createServer((req, res) => {
    /*Enviarle el estado de la solicitud al usuario*/
    res.statusCode = 200;
    res.setHeader(`content-Type`,`text/plain`)
    res.end(`Hola chicos`);
});
app.listen(PORT, () => {
    console.log(`el aplicativo esta corriendo en el puerto`, PORT)
});