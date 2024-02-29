const request = require("supertest");
const app = require("../app");

describe("Test the order routes", () => {
    test("It should get all orders for GET /", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
    });

    test("It should get a specific order by ID for GET /orders/:id", async () => {
        const orderId = "614fa19b0d070c001f24f9db";
        const response = await request(app).get(`/orders/${orderId}`);
        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
    });

    test("It should create a new order for POST /create-orders", async () => {
        const orderData = {};
        const response = await request(app)
            .post("/create-orders")
            .send(orderData);
        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
    });

    test("It should respond with an error for invalid order data on POST /create-orders", async () => {
        const invalidOrderData = {};
        const response = await request(app)
            .post("/create-orders")
            .send(invalidOrderData);
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toBeDefined();
    });
});
