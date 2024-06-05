<template>
  <div class="container">
    <div>
      <h1>List App demo pinia</h1>
      <button class="button" @click="createItem">
        <span class="button__text">New Item</span>
      </button>
    </div>

    <ListApp />
    
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { Item } from "~/interface";
import { useMainStore } from "~/store/index";
import ListApp from "~/components/ListApp.vue";

const items = ref<Item[]>([]);

const mainStore = useMainStore();

onMounted(() => {
  items.value = mainStore.items;
});

const createItem = () => {
  mainStore.createNewItem({
    id: 1,
    name: 'Item',
    description: 'This is description',
  });
}

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  text-align: center;

  .button {
    height: 50px;
    padding: 0;
    background: #009578;
    border: none;
    outline: none;
    border-radius: 5px;
    overflow: hidden;
    font-family: "Quicksand", sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 20px
  }

  .button:hover {
    background: #008168;
  }

  .button:active {
    background: #006e58;
  }

  .button__text {
    display: inline-flex;
    align-items: center;
    padding: 0 24px;
    color: #fff;
    height: 100%;
  }
}
</style>