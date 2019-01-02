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

// Enable API
API.enable(function(){
  wp_config.status = true;
  console.log(wp_config.name +" version "+ wp_config.version +" is running..");
});

// Call testing function with some delay
setTimeout(function(){
  API.testt();
}, 5000);
