import { mock, when } from "strong-mock"
import { describe, it } from "vitest"

import { ContentScript, ContentScriptProps } from "@content-script/ContentScript"

import { Vitest } from "test-support/ext/vitest/Vitest"
import { FakeCodeMirror6 } from "test-support/fakes/joplin/FakeCodeMirror6"

describe("ContentScript", () => {
  describe("create", () => {
    it("does nothing for cm5", async () => {
      const mockCreateExtension = mock<ContentScriptProps["createExtension"]>()

      ContentScript.create({ createExtension: mockCreateExtension }).plugin({})

      await Vitest.settlePendingPromises()
    })

    it("creates cm6 plugin extension", async () => {
      const fakeCodeMirror = FakeCodeMirror6.create()
      const mockCreateExtension = mock<ContentScriptProps["createExtension"]>()

      when(() => mockCreateExtension(fakeCodeMirror)).thenResolve(mock())

      ContentScript.create({ createExtension: mockCreateExtension }).plugin(fakeCodeMirror)

      await Vitest.settlePendingPromises()
    })
  })
})
