import { store } from './../store/index';
import { SHOW_NOTIFICATION } from './../store/mutations-type';
import { NotificationType } from '@/interfaces/INotification';

type Notificator = {
  showNotification: (type: NotificationType, title: string, message: string) => void
}

export default () : Notificator => {
  const showNotification = (type: NotificationType, title: string, message: string): void => {
    store.commit(SHOW_NOTIFICATION, {
      type,
      title,
      message
    });
  }

  return {
    showNotification
  }
}