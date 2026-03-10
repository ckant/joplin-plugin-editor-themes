import { Extension, Prec } from "@codemirror/state"

import { StyleModules } from "@ext/codemirror/StyleModules"

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
    const theme = Extensions.themes[config.theme]
    if (config.themePrecedence === "high") {
      try {
        StyleModules.increasePrecedence(theme)
      } catch {
        console.error("Failed to set theme precedence to high")
      }
    }
    return Prec.highest(theme)
  }
}
