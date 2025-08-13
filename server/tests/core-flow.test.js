import {
  api,
  startMemoryMongo,
  stopMemoryMongo,
  createAdminAndToken,
} from "./setup.js";

let token, productId, invId, customerId, orderId;

beforeAll(async () => {
  await startMemoryMongo();
  ({ token } = await createAdminAndToken());
});

afterAll(stopMemoryMongo);

test("create customer (admin)", async () => {
  const res = await api
    .post("/api/customers")
    .set("Authorization", `Bearer ${token}`)
    .send({ name: "Buyer", email: "buyer@test.com" })
    .expect(201);
  customerId = res.body.data.id || res.body.data._id;
  expect(customerId).toBeDefined();
});

test("create product (admin)", async () => {
  const res = await api
    .post("/api/products")
    .set("Authorization", `Bearer ${token}`)
    .send({ name: "Milk Toffee", category: "Toffee", price: 350 })
    .expect(201);
  productId = res.body.data._id;
  expect(productId).toBeDefined();
});

test("create inventory (admin)", async () => {
  const res = await api
    .post("/api/inventory")
    .set("Authorization", `Bearer ${token}`)
    .send({ productId, quantity: 10 })
    .expect(201);
  invId = res.body.data._id;
  expect(invId).toBeDefined();
});

test("increment inventory (admin)", async () => {
  const res = await api
    .patch(`/api/inventory/${invId}`)
    .set("Authorization", `Bearer ${token}`)
    .send({ inc: 2 })
    .expect(200);
  expect(res.body.data.quantity).toBe(12);
});

test("create order (customer/admin)", async () => {
  const res = await api
    .post("/api/orders")
    .set("Authorization", `Bearer ${token}`)
    .send({
      customerId,
      items: [{ productId, qty: 2 }],
      contactName: "Buyer",
      contactPhone: "0771234567",
      address: "Colombo",
    })
    .expect(201);

  orderId = res.body.data._id;
  expect(res.body.data.total).toBe(700); // 350 x 2
  expect(res.body.data.status).toBe("pending");
});

test("update order status (admin)", async () => {
  const res = await api
    .patch(`/api/orders/${orderId}/status`)
    .set("Authorization", `Bearer ${token}`)
    .send({ status: "processing" })
    .expect(200);
  expect(res.body.data.status).toBe("processing");
});
