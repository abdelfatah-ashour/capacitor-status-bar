export interface StatusBarPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
