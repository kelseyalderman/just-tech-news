// This file imports the User model and exports an object with it as a property

const User = require("./User");
const Post = require("./Post");

// create associations

// creates the reference for the id column in the User model to link to the corresponding foreign key pair, which is the user_id in the Post model.
User.hasMany(Post, {
  foreignKey: "user_id",
});

// make the reverse association- define the relationship of the Post model to the User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
