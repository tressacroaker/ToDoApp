var mongoose = require('mongoose');

var todoModel = new mongoose.Schema({
    description: {type: String},
    inProgress: {type: Boolean, default: false},
    completed: {type: Boolean, default: false}
});

module.exports = mongoose.model('Todo', todoModel);
