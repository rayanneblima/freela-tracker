export enum NotificationType {
  DEFAULT = '',
  SUCCESS = 'is-success',
  WARNING = 'is-warning',
  ERROR = 'is-danger'
}

export default interface INotification {
  id: number,
  type: NotificationType,
  title: string,
  message: string
}