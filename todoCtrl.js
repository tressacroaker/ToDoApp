var todoModel = require('./todoModel.js');

module.exports = {
  create: function(req, res) {
    var todo = new todoModel(req.body);
    todo.save(function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  read: function(req, res) {
    todoModel
    .find(req.query)
    .exec(function (err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  getOne: function(req, res) {
    todoModel
    .findById(req.params.id)
    .exec(function (err, result) {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  },
  update: function(req, res){
    todoModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  delete: function(req, res){
    todoModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  }
};
