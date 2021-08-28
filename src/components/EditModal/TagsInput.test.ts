import { canAddTag } from "./TagsInput"

describe("canAddTag", () => {
  it("returns false for empty tag", () => {
    expect(canAddTag("", [])).toBeFalsy()
  })

  it("returns false for already existing tag", () => {
    expect(canAddTag("swedish", ["slang", "swedish"])).toBeFalsy()
  })

  it("returns true for new non-empty tag", () => {
    expect(canAddTag("slang", ["swedish", "formal"])).toBeTruthy()
  })
})
