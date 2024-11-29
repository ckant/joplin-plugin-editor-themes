import { mock, when } from "strong-mock"
import { describe, expect, it } from "vitest"

import {
  GetSettingsRequest,
  GetSettingsResponse,
  PingRequest,
  PingResponse,
} from "@joplin-plugin-ipc/model/messages"

import { RequestHandler } from "@joplin-plugin/handler/RequestHandler"
import { PluginSettingsProvider } from "@joplin-plugin/settings/PluginSettingsProvider"

describe("RequestHandler", () => {
  const mockPluginSettingsProvider = mock<PluginSettingsProvider>()
  const pluginService: RequestHandler = RequestHandler.create({
    pluginSettingsProvider: mockPluginSettingsProvider,
  })

  describe("handle", () => {
    it("handles ping", async () => {
      await expect(pluginService.handle(PingRequest.of())).resolves.toStrictEqual(PingResponse.of())
    })

    it("handles getSettings", async () => {
      when(() => mockPluginSettingsProvider.provide()).thenResolve({ theme: "vscodeDark" })
      await expect(pluginService.handle(GetSettingsRequest.of())).resolves.toStrictEqual(
        GetSettingsResponse.of({ theme: "vscodeDark" }),
      )
    })
  })

  describe("ping", () => {
    it("returns ping response", async () => {
      await expect(pluginService.ping(PingRequest.of())).resolves.toStrictEqual(PingResponse.of())
    })
  })

  describe("getSettings", () => {
    it("returns settings", async () => {
      when(() => mockPluginSettingsProvider.provide()).thenResolve({ theme: "vscodeDark" })

      await expect(pluginService.getSettings(GetSettingsRequest.of())).resolves.toStrictEqual(
        GetSettingsResponse.of({ theme: "vscodeDark" }),
      )
    })
  })
})
