class ExampleController {
  show(req, res) {
    return res.send({ message: 'Hello, Node + Sequelize' });
  }
}

export default new ExampleController();
