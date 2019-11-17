# Wizity Network Client API

## Actions

### API.chat.send(message: string)
Send a chat message to community you are currently in. Success when:
* __message__ parameter isn't blank.

``` js
API.chat.send('Hello from API!');
```

### ~~API.chat.delete(messageid: string)~~
~~Delete message from community you are currently in.~~

``` js
API.chat.delete('testmessageid');
```

### API.community.subscribe()
Subscribe a community you are currently in. Success when:
* You aren't subscribing that community yet.

``` js
API.community.subscribe();
```

### API.community.unsubscribe()
Unsubscribe a community you are currently in. Success when:
* You are subscribing that community.

``` js
API.community.unsubscribe();
```

### API.community.private()
Change community to private. Success when:
* Your rank is Founder, Admin, Global Moderator, Host or Co-Host.

``` js
API.community.private();
```

### API.community.unprivate()
Change community back to public. Success when:
* Your rank is Founder, Admin, Global Moderator, Host or Co-Host.

``` js
API.community.unprivate();
```

### ~~API.config.get(callback: function)~~
~~Returns config in json.~~

``` js
~~API.config.get(function(data){
  console.log(data);
});~~
```

### API.config.toggle(feature: string)
Disable/enable a feature in user settings (config). Success when:
* __feature__ parameter is valid.

``` js
API.config.toggle('video'); // video, autolike, chatsounds, notifications
```

### API.song.like()
Like a current song in community you are in. Success when:
* You are in any community.
* Anyone is DJ and you aren't too.
* You didn't liked a song yet.

``` js
API.song.like();
```

### API.song.grab(playlistid: string)
Grab a current song in community you are in. Success when:
* You are in any community.
* TODO: dokončiť grab info

``` js
API.song.grab('YIJ9esMlgh');
```

### API.song.skip()
Skip a current song in community you are in. Success when:
* You are in any community.
* Your rank is Founder, Admin, Global Moderator, Test Global Moderator, Host, Co-Host, Manager or Moderator.
* Anyone is a DJ.

``` js
API.song.skip();
```

### API.waitlist.lock()
Lock a waitlist in community you are in. Success when:
* You are in any community.
* Your rank is Founder, Admin, Global Moderator, Host or Co-Host.

``` js
API.waitlist.lock();
```

### API.waitlist.unlock()
Unlock a waitlist in community you are currently in. Success when:
* You are in any community.
* Your rank is Founder, Admin, Global Moderator, Host or Co-Host.

``` js
API.waitlist.unlock();
```

### API.waitlist.join()
Join the waitlist in community you are currently in. Success when:
* You are in any community.
* Waitlist is unlock.
* You aren't a DJ and you aren't in waitlist yet.
* Count of users in waitlist is less than 25.

``` js
API.waitlist.join();
```

### API.waitlist.leave()
Leave the waitlist in community you are currently in. Success when:
* You are in any community.
* You are a DJ or you are in waitlist.

``` js
API.waitlist.leave();
```

## Event handlers

### API.on('ready-update', callback)
Event fires when account is ready to use.

``` js
API.on('ready-update', function(){
  console.log('Account is ready to use.');
});
```

### API.on('users-update', callback)
Event fires when anyone joins or leaves the community.

``` js
API.on('users-update', function(data){

  if(data.type === 'join'){
    console.log(`User ${data.user.name} has joined to community.`);
  }
  
  else if(data.type === 'leave'){
    console.log(`User ${data.user.name} has left from community.`);
  }
  
});
```

### API.on('subscribers-update', callback)
Event fires when anyone subscribe or unsubscribe the community.

``` js
API.on('subscribers-update', function(data){

  if(data.type === 'subscribe'){
    console.log(`User ${data.user.name} subscribe and community has got ${data.subscribers} subscribers.`);
  }
  
  else if(data.type === 'unsubscribe'){
    console.log(`User ${data.user.name} unsubscribe and the community has got ${data.subscribers} subscribers.`);
  }
  
});
```

### API.on('privatecommunity-update', callback)
Event fires when anyone changes community to private or back to public.

``` js
API.on('privatecommunity-update', function(data){

  if(data.type === 'private'){
    console.log(`User ${data.user.name} change community to private.`);
  }
  
  else if(data.type === 'unprivate'){
    console.log(`User ${data.user.name} change community back to public.`);
  }
  
});
```

### API.on('lockedwaitlist-update', callback)
Event fires when waitlist changes to lock or unlock.

``` js
API.on('lockedwaitlist-update', function(data){

  if(data.type === 'lock'){
    console.log(`User ${data.user.name} lock the waitlist.`);
  }
  
  else if(data.type === 'unlock'){
    console.log(`User ${data.user.name} unlock the waitlist.`);
  }
  
});
```

### API.on('community-update', callback)
Event fires when community info has changed.

``` js
API.on('community-update', function(data){
  console.log(`User ${data.user.name} changed name of community to ${data.community.name}.`);
});
```

### API.on('chat-update', callback)
Event fires when anyone sends message to community.

``` js
API.on('chat-update', function(data){
  console.log(data);
});
```

### API.on('song-update', callback)
Event fires when song in community has changed.

``` js
API.on('song-update', function(data){
  console.log(data);
});
```

### API.on('vote-update', callback)
Event fires when anyone vote on song.

``` js
API.on('vote-update', function(data){
  console.log(data);
});
```

### API.on('points-update', callback)
Event fires when my points changes.

``` js
API.on('points-update', function(data){
  console.log(data);
});
```

### API.on('waitlist-update', callback)
Event fires when anyone joins or leaves the waitlist.

``` js
API.on('waitlist-update', function(data){
  console.log(data);
});
```
