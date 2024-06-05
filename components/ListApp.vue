<template>
	<div class="container">
		<div>
			<div
				v-for="(item, index) in items"
				:key="index"
				style="background-color: #f5f5f5; padding: 10px; margin-bottom: 10px; margin-top: 10px;"
			>
				<code>{{ item }}</code>
				<button class="button" @click="deleteItem(item.id)">Delete</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { Item } from "~/interface/index";
import { useMainStore } from "~/store/index";

const items = ref<Item[]>([]);

const mainStore = useMainStore();

onMounted(() => {
	items.value = mainStore.items;
});

const deleteItem = (id: string) => {
	mainStore.deleteItem(id);
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
		padding: 0 15px;
		background: #ff7675;
		border: none;
		outline: none;
		border-radius: 5px;
		overflow: hidden;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
		margin-top: 20px;
		color: #fff;
		margin-left: 50px;
	}

	.button:hover {
		background: #d63031;
	}

	.button:active {
		background: #d63031;
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