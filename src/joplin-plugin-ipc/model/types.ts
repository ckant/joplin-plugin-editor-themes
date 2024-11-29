/**
 * The Joplin plugin settings.
 *
 * Duplicate of {@link PluginSettings} to decouple the Joplin plugin and the CodeMirror extension.
 * The CodeMirror extension can remain standalone and couple solely with `joplin-plugin-ipc`.
 *
 * @see PluginSettings
 */
export interface Settings {
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
