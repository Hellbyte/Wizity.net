# Wizity Network Client API

## Actions

### API.chat.send(message)
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

### API.config.toggle(feature)
Disable/enable a feature in user settings (config). Success when:
* __<feature>__ parameter is valid.

``` js
API.config.toggle('video'); // video, autolike, chatsounds, notifications
```

### API.song.skip()
Skip a current song in community you are in. Success when:
* You are in any community.
* Your rank is Founder, Admin, Global Moderator, Test Global Moderator, Host, Co-Host, Manager or Moderator.
* Anyone is a DJ.

``` js
API.song.skip();
```

### API.song.like()
Like a current song in community you are in. Success when:
* You are in any community.
* Anyone is DJ and you aren't too.
* You didn't liked a song yet.

``` js
API.song.like();
```

### API.song.grab(playlistid)
Grab a current song in community you are in. Success when:
* You are in any community.
* TODO: dokončiť grab info

``` js
API.song.grab('YIJ9esMlgh');
```
