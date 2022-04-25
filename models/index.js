// This file imports the User model and exports an object with it as a property

const User = require("./User");
const Post = require("./Post");
const Vote = require("./Vote");

// create associations

// creates the reference for the id column in the User model to link to the corresponding foreign key pair, which is the user_id in the Post model.
User.hasMany(Post, {
  foreignKey: "user_id",
});

// make the reverse association- define the relationship of the Post model to the User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// associates User and Post to one another through the Vote model
// When we query Post, we can see a total of how many votes a user creates
// When we query a  User, we can see all of the posts they've voted  on
User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
});

// Directly connect the Post and Vote models and the User and Vote models
// This is done by creating one-to-many associations directly between these models
Vote.belongsTo(User, {
  foreignKey: "user_id",
});

Vote.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Post.hasMany(Vote, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Vote };
