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
        abcdef: "Abcdef",
        abyss: "Abyss",
        androidstudio: "Android Studio",
        andromeda: "Andromeda",
        atomone: "Atom One",
        aura: "Aura",
        basicDark: "Basic Dark",
        basicLight: "Basic Light",
        bbedit: "BBEdit",
        bespin: "Bespin",
        consoleDark: "Console Dark",
        consoleLight: "Console Light",
        copilot: "Copilot",
        darcula: "Darcula",
        dracula: "Dracula",
        duotoneDark: "Duotone Dark",
        duotoneLight: "Duotone Light",
        eclipse: "Eclipse",
        githubDark: "GitHub Dark",
        githubLight: "GitHub Light",
        gruvboxDark: "Gruvbox Dark",
        gruvboxLight: "Gruvbox Light",
        kimbie: "Kimbie",
        materialDark: "Material Dark",
        materialLight: "Material Light",
        monokai: "Monokai",
        monokaiDimmed: "Monokai Dimmed",
        noctisLilac: "Noctis Lilac",
        nord: "Nord",
        okaidia: "Okaidia",
        quietlight: "Quiet Light",
        red: "Red",
        solarizedDark: "Solarized Dark",
        solarizedLight: "Solarized Light",
        sublime: "Sublime",
        tokyoNight: "Tokyo Night",
        tokyoNightDay: "Tokyo Night Day",
        tokyoNightStorm: "Tokyo Night Storm",
        tomorrowNightBlue: "Tomorrow Night Blue",
        vscodeDark: "VSCode Dark",
        vscodeLight: "VSCode Light",
        whiteDark: "White Dark",
        whiteLight: "White Light",
        xcodeDark: "Xcode Dark",
        xcodeLight: "Xcode Light",
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
