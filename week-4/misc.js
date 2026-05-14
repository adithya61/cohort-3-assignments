/*
Understand how to attach custom and standard headers to your HTTP responses.

Create a route GET /ping that returns { status: 'ok' }
Set X-Request-Id to a random UUID on every response
Set Cache-Control: no-store on the response
Verify headers appear using curl -I or browser DevTools
const { v4: uuidv4 } = require('uuid');
app.get('/ping', (req, res) => {
 TODO : set X-Request-Id and Cache-Control headers
 Todo : res.json({ status: 'ok' });
});
Use res.set('Header-Name', value) or res.setHeader() before calling res.json().
X-Request-Id (or X-Trace-Id) is standard in microservices for distributed tracing — log it server-side too.
*/

