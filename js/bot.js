const bot = {
  status: false,
  name: "TestBot",
  version: "1.0",
  users: [],
  API: {

    onstart: function(){
      bot.status = true;
      API.chat.send(`Bot version ${bot.version} created by Hellbyte is successfully enabled.`);
    }

  }
};

(function(){
  bot.API.onstart();

  API.on('users-update', function(data){
    if(!bot.status) return;

    if(data.type === 'join'){

      if(bot.users.includes(data.user.id)){
        API.chat.send(`Welcome back @${data.user.name}.`);
      }

      else{
        bot.users.push(data.user.id);
        API.chat.send(`Welcome @${data.user.name} to this community.`);
      }

    }

    else if(data.type === 'leave'){
      API.chat.send(`@${data.user.name} left our community. :(`);
    }

  });
  /***********************************************************************************************/

}());
