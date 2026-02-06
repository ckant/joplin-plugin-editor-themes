import JoplinSettings from "api/JoplinSettings"

import { PluginSettings } from "@joplin-plugin/settings/PluginSettings"
import { RawPluginSettings } from "@joplin-plugin/settings/PluginSettingSection"

export interface PluginSettingsProviderProps {
  readonly joplinSettings: JoplinSettings
}

/**
 * Provides plugin settings from {@link joplinSettings}.
 */
export class PluginSettingsProvider {
  private readonly joplinSettings: JoplinSettings

  static create(props: PluginSettingsProviderProps): PluginSettingsProvider {
    return new PluginSettingsProvider(props)
  }

  private constructor(props: PluginSettingsProviderProps) {
    this.joplinSettings = props.joplinSettings
  }

  /**
   * Returns {@link PluginSettings} from {@link RawPluginSettings}.
   */
  async provide(): Promise<PluginSettings> {
    const rawSettings = await this.provideRawSettings()
    return {
      theme: rawSettings.theme,
    }
  }

  private async provideRawSettings(): Promise<RawPluginSettings> {
    return {
      theme: await this.getRawSetting("theme"),
    }
  }

  private async getRawSetting<T>(name: keyof RawPluginSettings): Promise<T> {
    return (await this.joplinSettings.value(name)) as T
  }
}
