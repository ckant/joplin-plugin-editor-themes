import { describe, expect, it } from "vitest"

import { PluginSettings } from "@joplin-plugin/settings/PluginSettings"
import { PluginSettingsProvider } from "@joplin-plugin/settings/PluginSettingsProvider"

import { FakeJoplinSettings } from "test-support/fakes/joplin/FakeJoplinSettings"

describe("PluginSettingsProvider", () => {
  describe("provide", () => {
    it("provides settings", async () => {
      const fakeJoplinSettings = FakeJoplinSettings.create({
        values: {
          theme: "vscodeDark",
        },
      })

      await expect(
        PluginSettingsProvider.create({
          joplinSettings: fakeJoplinSettings,
        }).provide(),
      ).resolves.toStrictEqual({
        theme: "vscodeDark",
      } satisfies PluginSettings)
    })
  })
})
