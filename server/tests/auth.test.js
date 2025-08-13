import { api, startMemoryMongo, stopMemoryMongo } from "./setup.js";

beforeAll(startMemoryMongo);
afterAll(stopMemoryMongo);

describe("Auth", () => {
  test("register + login + me", async () => {
    await api
      .post("/api/auth/register")
      .send({
        name: "Cust",
        email: "cust@test.com",
        password: "Pass1234",
      })
      .expect(201);

    const login = await api
      .post("/api/auth/login")
      .send({
        email: "cust@test.com",
        password: "Pass1234",
      })
      .expect(200);

    const { token } = login.body;
    expect(token).toBeDefined();

    const me = await api
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${token}`)
      .expect(200);

    expect(me.body.user.email).toBe("cust@test.com");
  });
});
