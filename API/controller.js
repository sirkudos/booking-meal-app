const controller = {};

controller.get = (req, res) => {
   res.send('cool again');
};
controller.getmeals = (req, res) => {
    res.send('my super meals');
 };

module.exports = controller;