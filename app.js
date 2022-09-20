const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: "",
      isVisible: true,
    };
  },
  methods: {
    add() {
      if (this.task != "") {
        this.tasks.push(this.task);
        this.task = "";
      }
    },
    visibleHandler() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
