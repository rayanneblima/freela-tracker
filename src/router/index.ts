import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tasks from '../views/Tasks.vue';
import Projects from '../views/Projects.vue';
import ProjectsList from '../views/Projects/List.vue';
import ProjectForm from '../views/Projects/Form.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/projetos',
    name: 'projects',
    component: Projects,
    children: [
      {
        path: '',
        name: 'projectsList',
        component: ProjectsList
      },
      {
        path: 'novo',
        name: 'newProject',
        component: ProjectForm
      },
      {
        path: ':id',
        name: 'editProject',
        component: ProjectForm,
        props: true
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;