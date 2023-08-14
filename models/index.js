const User = require('./User');
const Comments = require('.comments/Comments');
const Post = require('./Post');

User.hasMany(Post, {as:"posts"});
Post.belongsTo(User, {as:"user"});




module.exports = { User, Comments, Post };