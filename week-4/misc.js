/* 
Understand how frameworks like Express themselves work internally — build a minimal middleware engine that processes an array of functions in sequence.

Tasks
Without using Express at all, build a pipeline(req, res, middlewares) function that runs an array of middleware functions in order, passing a next() that advances to the next function.

Implement async support — each middleware can be async and the engine should await it before calling next.

Implement error propagation — if any middleware calls next(err) or throws, skip to the first function with arity 4 (the error handler).

Rebuild the rate limiter and JWT middleware from previous assignments as pure functions compatible with your engine.

Write a 200-line reflection: how does this differ from Express's actual implementation? Look up Express's layer.js source.

Topics:
recursive dispatch
async middleware
error propagation internals
arity detection
how Express actually works
*/

const pipeline = (req, res, middlewares) => {
  let curPos = -1;

  const next = async (err) => {
    if (err) {
      let pos = curPos;
      while (pos < middlewares.length) {
        if (middlewares[pos].length === 4) {
          curPos = pos;
          await middlewares[pos](err, req, res, next);
          break;
        }
        pos++;
      }
    } else {
      curPos++;
      if (curPos < middlewares.length) {
        const f = middlewares[curPos];
        await f(req, res, next);
      }
    }
  };

  next();
};

const req = { url: "/test" };
const res = {};

pipeline(req, res, [
  (req, res, next) => { next(new Error('minor')); },
  (req, res, next) => { console.log('should be skipped'); next(); },
  (err, req, res, next) => { console.log('recovered'); next(); },
  (req, res, next) => { console.log('normal flow resumed'); next(); },
]);