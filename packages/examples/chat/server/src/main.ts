import * as Http from 'http';
import * as Koa from 'koa';
import * as Ws from 'ws';

const app = new Koa();
const server = Http.createServer(app.callback());
const ws = new Ws.Server({server});


ws.on('connection', socket => {
  console.log('Connected');
  socket.on('message', message => {
    console.log('received: %s', message);
  });
 
  socket.send(JSON.stringify({channel: 'chat', action: 'message', payload: `Client connecté`}));
});

server.listen(4321, () => console.log(('Listening on 4321')));