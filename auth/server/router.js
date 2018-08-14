module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.send({ message: 'Greetings, stranger!' });
  });
};
