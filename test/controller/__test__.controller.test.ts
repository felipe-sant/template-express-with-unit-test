import request from "supertest"
import app from "../../src/app"

describe("Testando controllers __test__", () => {
    it(`POST | http://0.0.0.0:0000/api/test - OK`, async () => {
        const url = "/api/test"
        const body = { test: "123" }

        const res = await request(app).post(url).send(body)
        expect(res.status).toBe(201)
    })

    it(`POST | http://0.0.0.0:0000/api/test - Body is required`, async () => {
        const url = "/api/test"

        const res = await request(app).post(url)
        expect(res.status).toBe(400)
    })

    it(`PUT | http://0.0.0.0:0000/api/test/:id - OK`, async () => {
        const url = "/api/test/67"
        const body = { test: "123" }

        const res = await request(app).put(url).send(body)
        expect(res.status).toBe(200)
    })

    it(`PUT | http://0.0.0.0:0000/api/test/:id - Body is required`, async () => {
        const url = "/api/test/67"

        const res = await request(app).put(url)
        expect(res.status).toBe(400)
    })

    it(`GET | http://0.0.0.0:0000/api/test - OK`, async () => {
        const url = "/api/test"

        const res = await request(app).get(url)
        expect(res.status).toBe(200)
    })

    it(`GET | http://0.0.0.0:0000/api/test/:id - OK`, async () => {
        const url = "/api/test/67"

        const res = await request(app).get(url)
        expect(res.status).toBe(200)
    })

    it(`DELETE | http://0.0.0.0:0000/api/test/:id - OK`, async () => {
        const url = "/api/test/67"

        const res = await request(app).delete(url)
        expect(res.status).toBe(204)
    })
})