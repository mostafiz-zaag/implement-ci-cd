const request = require("supertest");
const app = require("../app");
const assert = require("assert");

describe("GET /", () => {
    it("responds with Hello World from Express!", async () => {
        const response = await request(app).get("/");
        assert.strictEqual(response.text, "Hello World from Express!");
        assert.strictEqual(response.status, 200);
    });
});
