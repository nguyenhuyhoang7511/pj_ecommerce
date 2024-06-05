import { defineStore } from "pinia";
import type { Item } from "~/interface";

export type RootState = {
  items: Item[];
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>({items: []} as RootState),

  actions: {
    createNewItem(item: Item) {
      if (!item) return;

      const countItem = this.items.length;
      item.id = countItem + 1;
      this.items.push(item);
    },

    deleteItem(id: number) {
      const index = this.findIndexById(id);   

      if (index === -1) return;

      this.items.splice(index, 1);
    },

    findIndexById(id: number) {
      return this.items.findIndex((item) => item.id === id);
    },
  },
});