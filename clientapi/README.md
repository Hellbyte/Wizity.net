# Wizity Network Client API

## Actions

### API.chat.send
Send a chat message to community you are in.

``` javascript
API.chat.send('Hello from API!');
```

### API.community.subscribe
Subscribe a community you are in. Success when:
* You are in any community.
* You aren't subscribing that community yet.

``` js
API.community.subscribe();
```

### API.community.unsubscribe
Unsubscribe a community you are in. Success when:
* You are in any community.
* You are subscribing that community.

``` js
API.community.unsubscribe();
```

### API.community.private
Change community to private. Success when:
* You are in any community.
* Your rank is Founder, Admin, Global Moderator, Host or Co-Host.

``` js
API.community.private();
```

### API.community.unprivate
Change community back to public. Success when:
* You are in any community.
* Your rank is Founder, Admin, Global Moderator, Host or Co-Host.

``` js
API.community.unprivate();
```

### API.config.toggle
Disable/enable a feature in user settings. Success when:
* You are in any community.
* Your rank is Founder, Admin, Global Moderator, Host or Co-Host.

``` js
API.config.toggle('');
```

Returns a basic info about community you are in.
