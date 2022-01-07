import { InjectionKey } from "vue";
import { createStore, Store, useStore } from "vuex";
import IProject from "@/interfaces/IProject";
import INotification from "@/interfaces/INotification";
import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT, SHOW_NOTIFICATION, CLOSE_NOTIFICATION } from './mutations-type';

interface State {
  projects: IProject[],
  notifications: INotification[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state:{
    projects: [],
    notifications: []
  },

  mutations: {
    [ADD_PROJECT](state, newProject: IProject) {
      const project = {
        id: new Date().toISOString(),
        name: newProject.name
      } as IProject;

      state.projects.push(project);
    },

    [EDIT_PROJECT](state, editedProject: IProject) {
      const index = state.projects.findIndex((project) => project.id === editedProject.id);
      state.projects[index] = editedProject;
    },

    [DELETE_PROJECT](state, projectId: string) {
      state.projects = state.projects.filter((project) => project.id !== projectId);
    },

    [SHOW_NOTIFICATION](state, newNotification: INotification) {
      const notification = {
        id: new Date().getTime(),
        type: newNotification.type,
        title: newNotification.title,
        message: newNotification.message
      } as INotification;

      state.notifications.push(notification);
      setTimeout(() => {
        state.notifications = state.notifications.filter(not => not.id !== notification.id);
      }, 5000)
    },

    [CLOSE_NOTIFICATION](state, notificationId: number) {
      state.notifications = state.notifications.filter(not => not.id !== notificationId);
    }
  }
});

export function RUseStore(): Store<State> {
  return useStore(key);
}