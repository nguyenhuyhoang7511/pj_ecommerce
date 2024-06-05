<template>
  <div>
    <main>
      <ClientOnly>
        <Header />
        <slot />
        <Footer />
        
      </ClientOnly>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

</script>

<style>

</style>
