<template>
  <form @submit.prevent="handleSaveProject">
    <div class="field">
      <label for="projectName" class="label">Nome do Projeto</label>
      <input
        v-model="project.name"
        id="projectName"
        type="text"
        class="input"
      />
    </div>

    <div class="field">
      <button class="button" type="submit">Salvar</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RUseStore } from "../../store";
import useNotify from "../../hooks/notificator";
import IProject from "../../interfaces/IProject";
import { NotificationType } from "../../interfaces/INotification";
import { ADD_PROJECT, EDIT_PROJECT } from "../../store/mutations-type";
// import { notifyMixin } from "../../mixins/notifyMixin";

export default defineComponent({
  name: "ProjectsForm",

  // mixins: [notifyMixin],

  props: {
    id: {
      default: "",
      required: false,
      type: String,
    },
  },

  setup() {
    const store = RUseStore();
    const { showNotification } = useNotify(); 
    return {
      store,
      showNotification
    };
  },

  data() {
    return {
      project: {} as IProject,
    };
  },

  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find((project) => project.id === this.id);
      this.project.id = project?.id || this.id || "";
      this.project.name = project?.name || "";
    }
  },

  methods: {
    handleSaveProject() {
      this.id
        ? this.store.commit(EDIT_PROJECT, this.project)
        : this.store.commit(ADD_PROJECT, this.project);
      
      this.showNotification(NotificationType.SUCCESS, 'Sucesso!', `O projeto "${this.project.name}" foi ${this.id ? 'editado' : 'salvo'}.`);
      this.$router.push({ name: "projectsList" });
    }
  },
});
</script>
