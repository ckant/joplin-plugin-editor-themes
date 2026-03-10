import { Extension } from "@codemirror/state"
import { describe, expect, it } from "vitest"

import { StyleModules } from "@ext/codemirror/StyleModules"

describe("StyleModules", () => {
  describe("increasePrecedence", () => {
    it("increases specificity of rule selectors", () => {
      const rules = [".\u037C25a .cm-line,.\u037C26 .cm-line { --foo: bar; }"]
      const extension = [{ value: { rules}}] as unknown as Extension[]
      StyleModules.increasePrecedence(extension)


      expect(rules).toStrictEqual([".\u037C25a:not(#\\9) .cm-line,.\u037C26:not(#\\9) .cm-line { --foo: bar; }"])
    })
  })
})
