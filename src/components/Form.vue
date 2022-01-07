<template>
  <div class="box is-radiusless form">
    <div
      class="columns"
      role="form"
      aria-label="Formulário para criação de uma nova tarefa"
    >
      <div class="column is-4">
        <input
          ref="taskDescription"
          v-model="taskDescription"
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>

      <div class="column is-3">
        <div class="select">
          <select ref="selectProject" v-model="projectId">
            <option value="">Selecione o projeto</option>
            <option
              v-for="project in projects"
              :key="project.id"
              :value="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="column is-1">
        <input type="color" id="taskColor" v-model="taskColor" />
      </div>

      <div class="column">
        <Timer @onTimerStops="handleTaskFinished" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { RUseStore } from "../store";
import IProject from "../interfaces/IProject";
import { NotificationType } from "../interfaces/INotification";
import { notifyMixin } from "../mixins/notifyMixin";
import Timer from "./Timer.vue";

export default defineComponent({
  name: "Form",

  mixins: [notifyMixin],

  components: {
    Timer,
  },

  emits: ["onSaveTask"],

  setup() {
    const store = RUseStore();
    return {
      store,
      projects: computed(() => store.state.projects),
    };
  },

  data() {
    return {
      taskDescription: "",
      taskColor: "#DCC8CC",
      projectId: "",
    };
  },

  methods: {
    handleEmitTaskFinished(elapsedTime: number): void {
      this.$emit("onSaveTask", {
        duration: elapsedTime,
        description: this.taskDescription,
        color: this.taskColor || "",
        conclusionDate: new Date().toLocaleString(),
        project: this.projectId,
      });
      this.taskDescription = "";
    },

    handleTaskFinished(elapsedTime: number): void {
      if (!this.taskDescription) {
        this.showNotification(NotificationType.ERROR, 'Erro!', "Informe uma descrição para a tarefa.");
        (this.$refs["taskDescription"] as InstanceType<typeof HTMLInputElement>).focus();
        return;
      }

      if (!this.projectId) {
        this.showNotification(NotificationType.ERROR, 'Erro!', "Toda tarefa deve ser vinculada à um projeto.");
        (this.$refs["selectProject"] as InstanceType<typeof HTMLSelectElement>).focus();
        return;
      }

      const project = this.projects.find((project: IProject) => project.id === this.projectId);

      if (!project) {
        this.showNotification(NotificationType.ERROR, 'Erro!', "O projeto selecionado não foi encontrado. Tente novamente mais tarde.");
        return;
      }

      this.handleEmitTaskFinished(elapsedTime);
    },
  },
});
</script>

<style>
.form {
  background: var(--primary-bg);
  color: var(--primary-text);
}

#taskColor {
  border-radius: 4px;
  vertical-align: -webkit-baseline-middle;
}
</style>
