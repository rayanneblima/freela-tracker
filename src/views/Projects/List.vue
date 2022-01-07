<template>
  <div>
    <router-link :to="{ name: 'newProject' }" class="button mb-4">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo Projeto</span>
    </router-link>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>PROJETO</th>
          <th>AÇÕES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td class="project-name">{{ project.name }}</td>
          <td>
            <router-link
              :to="{ name: 'editProject', params: { id: project.id } }"
              class="button"
            >
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="handleDeleteProject(project.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { RUseStore } from "../../store";
import { DELETE_PROJECT } from "../../store/mutations-type";

export default defineComponent({
  name: "ProjectsList",

  setup() {
    const store = RUseStore();
    return {
      store,
      projects: computed(() => store.state.projects),
    };
  },

  methods: {
    handleDeleteProject(projectId: string) {
      if (projectId) {
        const response = confirm("Realmente deseja excluir este projeto? *Esta ação não poderá ser desfeita.");
        if (response) {
          this.store.commit(DELETE_PROJECT, projectId);
          this.$router.push({ name: "projectsList" });
        }
      }
    }
  }
});
</script>

<style scoped>
.project-name {
  overflow-wrap: anywhere;
}
</style>