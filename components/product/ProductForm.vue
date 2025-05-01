<script setup lang="ts">
import { useField } from 'vee-validate'

const categories = ['粉', '豆']
const roastLevels = [
  'ライトロースト',
  'シナモンロースト',
  'ミディアムロースト',
  'ハイロースト',
  'シティロースト',
  'フルシティロースト',
  'フレンチロースト',
  'イタリアンロースト',
]

const id = useField<string>('id')
const name = useField<string>('name')
const category = useField<string>('category')
const roastLevel = useField<string>('roast_level')
const volume = useField<number>('volume')
const price = useField<number>('price')
const features = useField<string>('features')
</script>

<template>
  <div>
    <v-text-field
      v-model="id.value.value"
      :error-messages="id.errorMessage.value"
      label="珈琲ID"
      placeholder="KIL-BL-000-000"
    />
    <v-text-field
      v-model="name.value.value"
      :error-messages="name.errorMessage.value"
      label="珈琲名"
      placeholder="キリマンジャロ"
    />
    <v-select
      v-model="category.value.value"
      :error-messages="category.errorMessage.value"
      label="カテゴリー"
      :items="categories"
    />
    <v-select
      v-model="roastLevel.value.value"
      :error-messages="roastLevel.errorMessage.value"
      label="焙煎度"
      :items="roastLevels"
    />
    <v-text-field
      v-model="volume.value.value"
      :error-messages="volume.errorMessage.value"
      label="内容量"
      placeholder="100g"
      suffix="g"
    />
    <v-text-field
      v-model="price.value.value"
      :error-messages="price.errorMessage.value"
      label="単価"
      placeholder="1000"
      prefix="¥"
    />
    <v-textarea
      v-model="features.value.value"
      :error-messages="features.errorMessage.value"
      label="特徴"
      placeholder="うっすらと焦げ目がついた程度の小麦色"
    />
  </div>
</template>
