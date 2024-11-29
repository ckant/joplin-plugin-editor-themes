import { CmContentScript, CodeMirror5, CodeMirror6 } from "api/types"

import { JoplinPlugins } from "@ext/joplin/JoplinPlugins"

export interface ContentScriptProps {
  readonly createExtension: (codeMirror: CodeMirror6) => Promise<void>
}

/**
 * Joplin content script for the EditorThemes Code Mirror extension.
 *
 * @see https://joplinapp.org/api/references/plugin_api/enums/contentscripttype.html#codemirrorplugin
 */
export class ContentScript implements CmContentScript {
  private readonly createExtension: ContentScriptProps["createExtension"]

  /**
   * Adds no extra addons/keymaps/modes to Code Mirror.
   */
  readonly codeMirrorResources: string[] = []

  readonly codeMirrorOptions: Record<string, unknown> = {}

  static create(props: ContentScriptProps): ContentScript {
    return new ContentScript(props)
  }

  private constructor(props: ContentScriptProps) {
    this.createExtension = props.createExtension
  }

  /**
   * Defines (an option that initializes) the {@link codeMirror} extension.
   *
   * This defers initialization of the extension until Joplin creates the Code Mirror editor.
   *
   * The extension itself initializes asynchronously, as it depends on Joplin state (plugin
   * config) which isn't available until later in the Joplin setup process.
   */
  plugin(codeMirror: CodeMirror5 | CodeMirror6): void {
    if (!JoplinPlugins.isCodeMirror6(codeMirror)) return

    this.initializeCm6Extension(codeMirror)
  }

  private initializeCm6Extension(codemirror: CodeMirror6): void {
    void this.createExtension(codemirror)
  }
}
