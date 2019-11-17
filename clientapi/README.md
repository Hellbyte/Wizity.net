# Wizity Network Client API

## Actions

### API.chat.send(message: string)
Send a chat message to community you are in. Success when:
* __message__ parameter isn't blank.

``` js
API.chat.send('Hello from API!');
```

### API.community.subscribe()
Subscribe a community you are in. Success when:
* You are in any community.
* You aren't subscribing that community yet.

``` js
API.community.subscribe();
```

### API.community.unsubscribe()
Unsubscribe a community you are in. Success when:
* You are in any community.
* You are subscribing that community.

``` js
API.community.unsubscribe();
```

### API.community.private()
Change community to private. Success when:
* You are in any community.
* Your rank is Founder, Admin, Global Moderator, Host or Co-Host.

``` js
API.community.private();
```

### API.community.unprivate()
Change community back to public. Success when:
* You are in any community.
* Your rank is Founder, Admin, Global Moderator, Host or Co-Host.

``` js
API.community.unprivate();
```

### API.config.toggle(feature = string)
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
  if(data.type === 'join') console.log(`User ${data.user.name} has joined to community.`);
  else if(data.type === 'leave') console.log(`User ${data.user.name} has left from community.`);
});
```
