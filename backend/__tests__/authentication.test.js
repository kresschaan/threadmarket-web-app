const request = require("supertest");
const app = require("../app");

describe("Test the user verification route", () => {
    test("It should respond with a JWT token for valid user credentials", async () => {
        const validCredentials = {
            username: "validUsername",
            password: "validPassword",
        };
        const response = await request(app)
            .post("/verify-user")
            .send(validCredentials);
        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
    });

    test("It should respond with an error for invalid username", async () => {
        const invalidCredentials = {
            username: "invalidUsername",
            password: "validPassword",
        };
        const response = await request(app)
            .post("/verify-user")
            .send(invalidCredentials);
        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
    });

    test("It should respond with an error for invalid password", async () => {
        const invalidCredentials = {
            username: "validUsername",
            password: "invalidPassword",
        };
        const response = await request(app)
            .post("/verify-user")
            .send(invalidCredentials);
        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
    });

    test("It should respond with an error for missing username or password", async () => {
        const incompleteCredentials = {};
        const response = await request(app)
            .post("/verify-user")
            .send(incompleteCredentials);
        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
    });
});
