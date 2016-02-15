Meteor.startup(() => {
  if(Meteor.users.find().count() === 0) {
    for(var i=0; i<10; i++){
      var email = "user" + i + "@example.com";
        Accounts.createUser({
          email: email,
          password: "nopassword"
        });
    }
  }
})
