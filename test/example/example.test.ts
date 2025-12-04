import func from "../../src/example/func"

test("Tem que dar 2", () => {
    expect(func(1, 1)).toBe(2)
})