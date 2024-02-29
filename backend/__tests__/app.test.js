const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
    test("It should respond with 404 for an unknown route", async () => {
        const response = await request(app).get("/unknown-route");
        expect(response.status).toBe(404);
    });
});
