export type MessageSeverity = 'success' | 'warning' | 'error' | 'info';

export type Message = {
  severity: MessageSeverity
  text: string
}
