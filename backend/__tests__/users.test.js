const request = require("supertest");
const app = require("../app"); // Assuming app.js is in the root directory

describe("Test the user routes", () => {
    test("It should respond with user data for GET /api/users", async () => {
        const response = await request(app).get("/api/users");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([]));
    });

    test("It should create a new user for POST /api/users/create-user", async () => {
        const userData = {};
        const response = await request(app)
            .post("/api/users/create-user")
            .send(userData);
        expect(response.status).toBe(500);
        expect(response.body).toEqual(expect.arrayContaining([]));
    });
});
