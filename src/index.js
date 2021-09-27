const express = require('express');
const { v4: uuidV4 } = require('uuid')
const app = express();

const customers = []

app.use(express.json())

app.post('/account', (req, res) => {
  const { cpf, name } = req.body;

  const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);

  if (customerAlreadyExists) {
    return res.status(400).send({ error: 'Customer already exists!' });
  }

  customers.push({
    cpf,
    name,
    id: uuidV4(),
    statement: [],
  });

  return res.status(201).send();
})

app.listen('3333')