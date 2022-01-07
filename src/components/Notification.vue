<template>
  <div class="rnotification">
    <article
      class="message"
      :class="notification.type"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <div class="message-header">
        {{ notification.title }}
        <button class="button is-ghost ml-2" @click="handleCloseNotification(notification.id)">
          <span class="icon has-text-white is-small">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
      <div class="message-body">
        {{ notification.message }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { RUseStore } from "../store";
import { CLOSE_NOTIFICATION } from "../store/mutations-type";

export default defineComponent({
  name: "Notification",

  setup() {
    const store = RUseStore();
    return {
      store,
      notifications: computed(() => store.state.notifications),
    };
  },

  methods: {
    handleCloseNotification(notificationId: number) {
      this.store.commit(CLOSE_NOTIFICATION, notificationId);
    }
  }
});
</script>

<style scoped>
.rnotification {
  bottom: 0;
  position: absolute;
  right: 0;
  width: 300px;
  z-index: 999;
}

.rnotification article {
  width: 100%;
}
</style>
