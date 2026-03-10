import { Extension } from "@codemirror/state"
import { Guards } from "@ts-belt"

/**
 * Extensions for `StyleModule`s.
 */
export namespace StyleModules {
  // Matches the special-character class assigned by style-mod
  const rootClassRegex = /(\.\u037C\w*)/g

  // Increases specificity by 1 id (e.g. 0-0-1 becomes 1-0-1)
  const rootClassReplacement = "$1:not(#\\9)"

  interface StyleModuleish { readonly rules: string[] }

  /**
   * Increases specificity of selectors in the {@link extension}'s StyleModule rules by 1 id.
   * e.g. 0-0-1 becomes 1-0-1
   *
   * Note:
   * The Extension type is opaque, so this tries to find StyleModules by shape.
   * It then tries to replace each CSS rule string inside with the same rule with increased
   * specificity.
   *
   * The shape and rule format seems to be fairly stable, however this approach
   * accesses private properties on opaque objects and isn't guaranteed to work.
   */
  export function increasePrecedence(extension: Extension): void {
    const styleModules = findStyleModules(extension)
    for (const {rules} of styleModules) {
      for (let i = 0; i < rules.length; i++) {
        rules[i] = increaseSpecificity(rules[i])
      }
    }
  }

  function increaseSpecificity(rule: string): string {
    return rule.replace(rootClassRegex, rootClassReplacement)
  }

  function findStyleModules(extension: Extension): StyleModuleish[] {
    const styleModules: StyleModuleish[] = []
    collectStyleModules(extension, styleModules)
    return styleModules
  }

  function collectStyleModules(extension: Extension, styleModules: StyleModuleish[]): void {
    if (Guards.isArray(extension)) {
      for (const extensionItem of extension) {
        collectStyleModules(extensionItem, styleModules)
      }
    } else {
      if (!Guards.isObject(extension)) return

      const maybeFacetProvider = extension as object

      if (!("value" in maybeFacetProvider)) return
      if (!Guards.isObject(maybeFacetProvider.value)) return

      const maybeStyleModule = maybeFacetProvider.value as object

      if (!("rules" in maybeStyleModule)) return
      if (!(Guards.isArray(maybeStyleModule.rules))) return

      const styleModule = maybeStyleModule as StyleModuleish

      if (styleModules.includes(styleModule)) return

      styleModules.push(styleModule)
    }
  }
}
