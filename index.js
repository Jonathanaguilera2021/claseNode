
const http = require(`http`);

const ip = `127.0.0.1`

const PORT = 1234;

const app = http.createServer((req, res) => {
    /*Enviarle el estado de la solicitud al usuario*/
    res.statusCode = 200;
    res.setHeader(`content-Type`,`text/plain`)
    res.end(`Hola curso mean`);
});
app.listen(PORT,ip, () => {
    console.log(`el aplicativo esta corriendo en el puerto`, PORT, ip)
});