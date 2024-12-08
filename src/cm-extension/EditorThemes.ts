import { Extension, Prec } from "@codemirror/state"

import { Extensions } from "@cm-extension/Extensions"
import { Config } from "@cm-extension/model/Config"

/**
 * EditorThemes Code Mirror 6 extension.
 *
 * @see https://codemirror.net/docs/ref/
 */
export namespace EditorThemes {
  /**
   * Returns EditorThemes extension configured by the given {@link config}.
   */
  export function extension(config: Config): Extension {
    return Prec.highest(Extensions.themes[config.theme])
  }
}
