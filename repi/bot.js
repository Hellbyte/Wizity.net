var bot = {
  name: "Bot",
  version: "1.0",
  room: "url",
  api: {};
};

bot.api.onStart = function(){
  API.sendChat(bot.name +" version "+ bot.version +"is successfully enabled!");
}

(function(){
  bot.api.onStart();
}());
