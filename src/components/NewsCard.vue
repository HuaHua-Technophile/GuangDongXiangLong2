<template>
  <div
    class="d-grid mx-auto"
    style="
      max-width: var(--content-max-width);
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      /* grid-auto-rows: auto; */
      grid-template-rows: masonry;
    ">
    <template v-for="i in props.data.data">
      <a v-if="i.url" :href="i.url" target="_blank" rel="noopener noreferrer">
        <NewsContent :i="i" />
      </a>
      <RouterLink v-else :to="{ name: '新闻详情', params: { id: i.id } }">
        <NewsContent :i="i" />
      </RouterLink>
    </template>
  </div>
</template>
<script lang="ts" setup>
  const props = defineProps<{
    data: { data: { id?: number; url?: string }[] };
  }>();
</script>
