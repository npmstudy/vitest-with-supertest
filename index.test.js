import { expect, test } from "vitest";
import supertest from "supertest";
import app from "./index.js";

test("koa app", () => {
  // expect(sum(1, 2)).toBe(3);
  supertest(app.callback())
    .get("/")
    .expect("Content-Type", /html/)
    // .expect("Content-Length", "15")
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
    });
});
