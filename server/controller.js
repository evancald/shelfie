module.exports = {
  read: (req, res) => {
    req.app.get('db').get_inventory().then( inventory => {
      res.status(200).send(inventory)
    })
  }
}