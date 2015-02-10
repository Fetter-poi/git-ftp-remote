// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
var repo = mongoose.model('Repo', {
    name: {type: String, default: ''},
    directory: {type: String, default: ''},
    lastUpdated: {type: Date, default: Date.now}
});

repo.pre('save', function(next){
    var model = this;
    model.lastUpdated(Date.now());
    next();
});

module.exports = repo;
