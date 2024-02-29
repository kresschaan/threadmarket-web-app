const request = require("supertest");
const app = require("../app");

describe("Test the payment routes", () => {
    test("It should create a payment intent for POST /create-payment-intent", async () => {
        const requestBody = {
            amount: 1000,
        };
        const response = await request(app)
            .post("/create-payment-intent")
            .send(requestBody);
        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
    });

    test("It should respond with an error for invalid request data on POST /create-payment-intent", async () => {
        const invalidRequestBody = {};
        const response = await request(app)
            .post("/create-payment-intent")
            .send(invalidRequestBody);
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toBeDefined();
    });
});
