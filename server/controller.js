module.exports = {
  read: (req, res) => {
    req.app.get('db').get_inventory().then( response => {
      res.status(200).send(response)
    })
  },
  create: (req, res) => {
    const {name, price, img} = req.body;
    req.app.get('db').create_product([name, price, img]).then( () => {
      res.status(200).send();
    })
  }
}