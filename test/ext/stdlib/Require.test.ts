import { describe, expect, it } from "vitest"

import { Require } from "@ext/stdlib/Require"

describe("Require", () => {
  describe("nonNegativeInteger", () => {
    it("allows 0", () => {
      expect(() => Require.nonNegativeInteger(0)).not.toThrowError()
    })

    it("allows positive integers", () => {
      expect(() => Require.nonNegativeInteger(1)).not.toThrowError()
    })

    it("throws Error if non-integer", () => {
      expect(() => Require.nonNegativeInteger(0.5)).toThrowError()
    })

    it("throws Error if negative integer", () => {
      expect(() => Require.nonNegativeInteger(-1)).toThrowError()
    })
  })
})
