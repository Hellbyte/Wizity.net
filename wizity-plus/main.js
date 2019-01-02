var config = {
  name: "Wizity+",
  version: "1.0",
  status: false,
  api: "Wizity.net APIv1",
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
API.enable(config.api, function(){
  config.status = true;
  console.log(config.name +" version "+ config.version +" is running..");
});

// Call testing function
API.testor();
