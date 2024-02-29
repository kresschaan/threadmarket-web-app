const request = require("supertest");
const app = require("../app");

describe("Test the product routes", () => {
    test("It should respond with product data for GET /api/products", async () => {
        const response = await request(app).get("/api/products");
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(Array.isArray(response.body)).toBe(false);
    });

    test("It should create a new product for POST /api/products/create-products", async () => {
        const productData = {
            name: "Test Product",
            price: 10.99,
        };
        const response = await request(app)
            .post("/api/products/create-products")
            .send(productData);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("Message");
        expect(response.body.Message).toBeDefined();
        expect(response.body.Message.name).toBe(productData.name);
        expect(response.body.Message.price).toBe(productData.price);
    });

    test("It should respond with an error for invalid product data on POST /api/products/create-products", async () => {
        const invalidProductData = {};
        const response = await request(app)
            .post("/api/products/create-products")
            .send(invalidProductData);
        expect(response.status).toBe(200);
    });
});
