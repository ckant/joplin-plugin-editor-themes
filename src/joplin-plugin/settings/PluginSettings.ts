/**
 * Settings for the {@link JoplinPlugin}.
 *
 * Currently, this is a duplicate of the CodeMirror extension {@link Config}.
 * This duplication exists to decouple the Joplin plugin from the CodeMirror extension.
 *
 * @see Config
 */
export interface PluginSettings {
  readonly theme:
    | "abcdef"
    | "abyss"
    | "androidstudio"
    | "andromeda"
    | "atomone"
    | "aura"
    | "basicDark"
    | "basicLight"
    | "bbedit"
    | "bespin"
    | "consoleDark"
    | "consoleLight"
    | "copilot"
    | "darcula"
    | "dracula"
    | "duotoneDark"
    | "duotoneLight"
    | "eclipse"
    | "githubDark"
    | "githubLight"
    | "gruvboxDark"
    | "gruvboxLight"
    | "kimbie"
    | "materialDark"
    | "materialLight"
    | "monokai"
    | "monokaiDimmed"
    | "noctisLilac"
    | "nord"
    | "okaidia"
    | "quietlight"
    | "red"
    | "solarizedDark"
    | "solarizedLight"
    | "sublime"
    | "tokyoNight"
    | "tokyoNightDay"
    | "tokyoNightStorm"
    | "tomorrowNightBlue"
    | "vscodeDark"
    | "vscodeLight"
    | "whiteDark"
    | "whiteLight"
    | "xcodeDark"
    | "xcodeLight"
}
