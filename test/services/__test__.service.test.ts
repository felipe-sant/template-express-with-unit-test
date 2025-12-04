import TestService from "../../src/services/__test__.service"

describe("Testando services __test__", () => {
    const service = new TestService()

    it("TestService.create", () => {
        const successfullyMessage = "Resource created successfully!"
        const body = {}

        const response = service.create(body)
        expect(response.message).toBe(successfullyMessage)
    })

    it("TestService.read", () => {
        const successfullyMessage = "Retrieved resources successfully!"
        
        const response = service.read()
        expect(response.message).toBe(successfullyMessage)
    })

    it("TestService.readOne", () => {
        const id = "67"
        const successfullyMessage = `Retrieved resource with ID ${id} successfully!`

        const response = service.readOne(id)
        expect(response.message).toBe(successfullyMessage)
    })

    it("TestService.update", () => {
        const id = "67"
        const successfullyMessage = `Updated resource with ID ${id} successfully!`
        const body = {}

        const response = service.update(id, body)
        expect(response.message).toBe(successfullyMessage)
    })

    it("TestService.patch", () => {
        const id = "67"
        const successfullyMessage = `Patched resource with ID ${id} successfully!`
        const body = {}

        const response = service.patch(id, body)
        expect(response.message).toBe(successfullyMessage)
    })

    it("TestService.delete", () => {
        const id = "67"
        const successfullyMessage = `Deleted resource with ID ${id} successfully!`
        
        const response = service.delete(id)
        expect(response.message).toBe(successfullyMessage)
    })
})