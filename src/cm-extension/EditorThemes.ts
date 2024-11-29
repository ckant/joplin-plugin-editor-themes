import { Extension, Prec } from "@codemirror/state"

import { Config } from "@cm-extension/model/Config"

import {
  abcdef,
  abyss,
  androidstudio,
  andromeda,
  atomone,
  aura,
  basicDark,
  basicLight,
  bbedit,
  bespin,
  consoleDark,
  consoleLight,
  copilot,
  darcula,
  dracula,
  duotoneDark,
  duotoneLight,
  eclipse,
  githubDark,
  githubLight,
  gruvboxDark,
  gruvboxLight,
  kimbie,
  materialDark,
  materialLight,
  monokai,
  monokaiDimmed,
  noctisLilac,
  nord,
  okaidia,
  quietlight,
  red,
  solarizedDark,
  solarizedLight,
  sublime,
  tokyoNight,
  tokyoNightDay,
  tokyoNightStorm,
  tomorrowNightBlue,
  vscodeDark,
  vscodeLight,
  whiteDark,
  whiteLight,
  xcodeDark,
  xcodeLight,
} from "@uiw/codemirror-themes-all"

const themes = {
  abcdef: abcdef,
  abyss: abyss,
  androidstudio: androidstudio,
  andromeda: andromeda,
  atomone: atomone,
  aura: aura,
  basicLight: basicLight,
  basicDark: basicDark,
  bbedit: bbedit,
  bespin: bespin,
  consoleLight: consoleLight,
  consoleDark: consoleDark,
  copilot: copilot,
  darcula: darcula,
  dracula: dracula,
  duotoneLight: duotoneLight,
  duotoneDark: duotoneDark,
  eclipse: eclipse,
  githubLight: githubLight,
  githubDark: githubDark,
  gruvboxLight: gruvboxLight,
  gruvboxDark: gruvboxDark,
  kimbie: kimbie,
  materialDark: materialDark,
  materialLight: materialLight,
  monokai: monokai,
  monokaiDimmed: monokaiDimmed,
  noctisLilac: noctisLilac,
  nord: nord,
  okaidia: okaidia,
  quietlight: quietlight,
  red: red,
  solarizedLight: solarizedLight,
  solarizedDark: solarizedDark,
  sublime: sublime,
  tokyoNight: tokyoNight,
  tokyoNightStorm: tokyoNightStorm,
  tokyoNightDay: tokyoNightDay,
  tomorrowNightBlue: tomorrowNightBlue,
  vscodeLight: vscodeLight,
  vscodeDark: vscodeDark,
  whiteLight: whiteLight,
  whiteDark: whiteDark,
  xcodeLight: xcodeLight,
  xcodeDark: xcodeDark,
} as const

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
    return Prec.highest(themes[config.theme])
  }
}
