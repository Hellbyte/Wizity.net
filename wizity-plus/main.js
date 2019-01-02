var wp_config = {
  name: "Wizity+",
  version: "1.0",
  status: false,
  site: "https://wizity.net",
  developers: [
    1
  ],
  functions: {
    autolike: true,
    autojoin: false
  }
};

// Custom script API
var WP_API = {};

WP_API.onLoad = function(){
  wp_config.status = true;
  console.log(wp_config.name +" version "+ wp_config.version +" is running..");
};

(function(){
  WP_API.onLoad();

  // Call testing function with some delay
  setTimeout(function(){
    var getFirstUsername = API.getUser(1).name;

    alert(getFirstUsername);
  }, 5000);

}());
