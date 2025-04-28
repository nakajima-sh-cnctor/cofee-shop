<script setup lang="ts">
const categories = ['粉', '豆']
const roastLevels = [
  'ライトロースト',
  'シナモンロースト',
  'ミディアムロースト',
]
</script>

<template>
  <div>
    <v-text-field
      label="珈琲ID"
      placeholder="KIL-BL-000-000"
    />
    <v-text-field
      label="珈琲名"
      placeholder="キリマンジャロ"
    />
    <v-select
      label="カテゴリー"
      :items="categories"
    />
    <v-select
      label="焙煎度"
      :items="roastLevels"
    />
    <v-text-field
      label="内容量"
      placeholder="100g"
      suffix="g"
    />
    <v-text-field
      label="単価"
      placeholder="1000"
      prefix="¥"
    />
    <v-textarea
      label="特徴"
      placeholder="うっすらと焦げ目がついた程度の小麦色"
    />
  </div>
</template>
