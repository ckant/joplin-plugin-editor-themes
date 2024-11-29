/**
 * Bootstrap for defining the Code Mirror content script.
 *
 * This exists in the top-level `src` directory because content script assets
 * must either be in the content script's directory or a subdirectory.
 *
 * However, the content script is in `./content-script` and the assets are in `./cm-extension`.
 * These two separate directories exist to (physically) decouple the standalone Code Mirror extension
 * from the Joplin content script.
 *
 * This file bridges the content script with the relative references to the CM extension assets.
 */

import { CmContentScriptDefinition, PostMessageHandler } from "api/types"

import { Retrier } from "@ext/stdlib/Retrier"

import { JoplinPluginClient } from "@joplin-plugin-ipc/JoplinPluginClient"
import { Settings } from "@joplin-plugin-ipc/model/types"

import { ContentScript } from "@content-script/ContentScript"

import { EditorThemes } from "@cm-extension/EditorThemes"

/**
 * Calls the Joplin plugin with inter-process communication via {@link postMessage}.
 *
 * @see https://joplinapp.org/api/references/plugin_api/enums/contentscripttype.html#codemirrorplugin
 */
async function getSettings(postMessage: PostMessageHandler): Promise<Settings> {
  const retrier = Retrier.create({ window })
  const client = JoplinPluginClient.create({ call: postMessage, retrier })
  return await client.getSettings()
}

const contentScriptDefinition: CmContentScriptDefinition = (contentScriptContext) => {
  return ContentScript.create({
    createExtension: async (codeMirror) => {
      const config = await getSettings(contentScriptContext.postMessage)
      codeMirror.addExtension(EditorThemes.extension(config))
    },
  })
}

// noinspection JSUnusedGlobalSymbols
/**
 * @see https://joplinapp.org/api/references/plugin_api/enums/contentscripttype.html#codemirrorplugin
 */
export default contentScriptDefinition
