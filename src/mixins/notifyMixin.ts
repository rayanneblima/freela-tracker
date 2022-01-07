import { store } from './../store/index';
import { SHOW_NOTIFICATION } from './../store/mutations-type';
import { NotificationType } from '@/interfaces/INotification';

export const notifyMixin = {
  methods: {
    showNotification(type: NotificationType, title: string, message: string): void {
      store.commit(SHOW_NOTIFICATION, {
        type,
        title,
        message
      });
    }
  }
}