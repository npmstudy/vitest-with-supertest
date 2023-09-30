# vitest-with-supertest

```js
import { expect, test } from "vitest";
import supertest from "supertest";
import app from "./index.js";

test("koa app", async () => {
  const res = await supertest(app.callback()).get("/");

  expect(res.status).toEqual(200);
  expect(res.text).toEqual("Hello Koa");
});

```