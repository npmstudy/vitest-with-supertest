import Koa from "koa";
const app = new Koa();

// response
app.use((ctx) => {
  ctx.type = "html";
  ctx.body = "Hello Koa";
});

export default app;
