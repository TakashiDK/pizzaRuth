const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3306;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/assets/images/'); // Pasta onde as imagens serão salvas
  },
  filename: function (req, file, cb) {
    const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_pizzas', 
});

db.connect((err) => {
  if (err) {
    console.error('Erro de conexão ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados estabelecida');
  }
});

app.use(express.json());
app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
  try {
    const { name, value } = req.body;
    const imagePath = `/images/${req.file.filename}`;

    const sql = 'INSERT INTO products (name, value, image_path) VALUES (nm_pizza, vl_pizza, img_pizza)';
    db.query(sql, [name, value, imagePath], (err, result) => {
      if (err) {
        console.error('Erro ao inserir no banco de dados:', err);
        res.status(500).json({ message: 'Erro interno do servidor' });
      } else {
        res.status(201).json({ message: 'Produto criado com sucesso!' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
