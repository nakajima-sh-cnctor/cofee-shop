<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { createProduct } from '@/composables/productApi'
import type { Product } from '@/types/product'

const isLoading = ref(false)

const schema = yup.object({
  id: yup.string().required('IDは必須です'),
  name: yup.string().required('名前は必須です'),
  category: yup.string().required('カテゴリは必須です'),
  roast_level: yup.string().required('焙煎度は必須です'),
  volume: yup.number().typeError('容量は数値で入力してください').required('容量は必須です'),
  price: yup.number().typeError('価格は数値で入力してください').required('価格は必須です'),
  features: yup.string().required('特徴は必須です'),
})

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true
  const product = values as unknown as Product
  await createProduct(product)
  isLoading.value = false
})

const onClear = () => {
  resetForm()
}
</script>

<template>
  <v-card>
    <v-card-title class="text-primary">
      珈琲の登録
    </v-card-title>
    <v-card-subtitle>
      珈琲の情報を登録してください
    </v-card-subtitle>
    <v-card-item>
      <ProductForm />
      <div class="d-flex justify-center mt-4">
        <v-btn
          class="mr-2"
          :loading="isLoading"
          @click="onSubmit"
        >
          登録
        </v-btn>
        <v-btn
          color="secondary"
          :disabled="isLoading"
          @click="onClear"
        >
          クリア
        </v-btn>
      </div>
    </v-card-item>
  </v-card>
</template>
