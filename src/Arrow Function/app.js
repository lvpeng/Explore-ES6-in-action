// Lexical this
var bob = {
  _name: "Bob",
  _friends: ['lvbin'],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f))
  }
};
bob.printFriends();
