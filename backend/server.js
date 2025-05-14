const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Ahora sirve desde la raíz
app.use(express.static(path.join(__dirname, '..')));


app.post('/contacto', (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  console.log(`Mensaje recibido de ${nombre} (${correo}): ${mensaje}`);
  res.send('¡Gracias por tu mensaje!');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});

