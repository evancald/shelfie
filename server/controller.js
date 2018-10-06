module.exports = {
  read: (req, res) => {
    req.app.get('db').get_inventory().then( response => {
      res.status(200).send(response)
    })
  },
  readProduct: (req, res) => {
    const productId = req.params.id;
    req.app.get('db').get_product([productId]).then( response => {
      res.status(200).send(response);
    })
  },
  create: (req, res) => {
    const {name, price, img} = req.body;
    req.app.get('db').create_product([name, price, img]).then( () => {
      res.status(200).send("create successful");
    })
  },
  delete: (req, res) => {
    const deleteId = req.params.id;
    req.app.get('db').delete_product([deleteId]).then(() => {
      res.status(200).send("create successful");
    })
  },
  update: (req, res) => {
    const updateId = req.params.id;
    const {name, price, img} = req.body;
    req.app.get('db').update_product([updateId, name, price, img]).then( () => {
      res.status(200).send("create successful");
    })
  }
}