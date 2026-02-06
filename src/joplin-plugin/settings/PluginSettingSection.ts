import { RawSettings } from "api/JoplinSettings"
import { ExtendedSettingSection, SettingItemType } from "api/types"

import { PluginSettings } from "@joplin-plugin/settings/PluginSettings"

/**
 * Represents the {@link ExtendedSettingSection} of the Joplin plugin.
 * The settings correspond directly to those defined in {@link PluginSettings}.
 */
export const PluginSettingSection = {
  label: "Editor Themes",
  // Font Awesome code icon
  // https://fontawesome.com/v5/icons/brush?f=classic&s=solid
  iconName: "fa fa-solid fa-brush",
  settings: {
    theme: {
      type: SettingItemType.String,
      public: true,
      value: "vscodeDark",
      isEnum: true,
      options: {
        "abcdef": "Abcdef",
        "abcdef_alt": "Abcdef Alt",
        "abyss": "Abyss",
        "abyss_alt": "Abyss Alt",
        "androidstudio": "Android Studio",
        "androidstudio_alt": "Android Studio Alt",
        "andromeda": "Andromeda",
        "andromeda_alt": "Andromeda Alt",
        "atomone": "Atom One",
        "aura": "Aura",
        "basicDark": "Basic Dark",
        "basicDark_alt": "Basic Dark Alt",
        "basicLight": "Basic Light",
        "basicLight_alt": "Basic Light Alt",
        "bbedit": "BBEdit",
        "bespin": "Bespin",
        "catppuccinMocha": "Catppuccin Mocha",
        "cobalt2": "Cobalt2",
        "consoleDark": "Console Dark",
        "consoleLight": "Console Light",
        "copilot": "Copilot",
        "darcula": "Darcula",
        "dracula": "Dracula",
        "duotoneDark": "Duotone Dark",
        "duotoneLight": "Duotone Light",
        "eclipse": "Eclipse",
        "forest": "forest",
        "githubDark": "GitHub Dark",
        "githubDark_alt": "GitHub Dark Alt",
        "githubLight": "GitHub Light",
        "githubLight_alt": "GitHub Light Alt",
        "gruvboxDark": "Gruvbox Dark",
        "gruvboxDark_alt": "Gruvbox Dark Alt",
        "gruvboxLight": "Gruvbox Light",
        "gruvboxLight_alt": "Gruvbox Light Alt",
        "highContrastDark": "High Contrast Dark",
        "highContrastLight": "High Contrast Light",
        "kimbie": "Kimbie",
        "materialDark": "Material Dark",
        "materialDark_alt": "Material Dark Alt",
        "materialLight": "Material Light",
        "materialLight_alt": "Material Light Alt",
        "monokai": "Monokai",
        "monokai_alt": "Monokai Alt",
        "monokaiDimmed": "Monokai Dimmed",
        "noctisLilac": "Noctis Lilac",
        "nord": "Nord",
        "nord_alt": "Nord Alt",
        "okaidia": "Okaidia",
        "palenight": "Palenight",
        "quietlight": "Quiet Light",
        "red": "Red",
        "solarizedDark": "Solarized Dark",
        "solarizedDark_alt": "Solarized Dark 2 ",
        "solarizedLight": "Solarized Light",
        "solarizedLight_alt": "Solarized Light Alt",
        "sublime": "Sublime",
        "synthwave84": "Synthwave84",
        "tokyoNight": "Tokyo Night",
        "tokyoNightDay": "Tokyo Night Day",
        "tokyoNightDay_alt": "Tokyo Night Day Alt",
        "tokyoNightStorm": "Tokyo Night Storm",
        "tokyoNightStorm_alt": "Tokyo Night Storm Alt",
        "tomorrowNightBlue": "Tomorrow Night Blue",
        "volcano": "Volcano",
        "vscodeDark": "VSCode Dark",
        "vscodeDark_alt": "VSCode Dark Alt",
        "vscodeLight": "VSCode Light",
        "vscodeLight_alt": "VSCode Light Alt",
        "whiteDark": "White Dark",
        "whiteLight": "White Light",
        "xcodeDark": "Xcode Dark",
        "xcodeLight": "Xcode Light",
      },
      label: "Theme",
      description: "Sets the editor theme",
    },
  },
} as const satisfies ExtendedSettingSection<PluginSettings>

/**
 * Represents the type of the {@link PluginSettingSection} settings.
 */
export type RawPluginSettings = RawSettings<(typeof PluginSettingSection)["settings"]>
