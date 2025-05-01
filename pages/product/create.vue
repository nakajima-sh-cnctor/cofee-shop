<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { createProduct } from '@/composables/productApi'

const schema = yup.object({
  id: yup.string().required('IDは必須です'),
  name: yup.string().required('名前は必須です'),
  category: yup.string().required('カテゴリは必須です'),
  roastLevel: yup.string().required('焙煎度は必須です'),
  volume: yup.number().typeError('容量は数値で入力してください').required('容量は必須です'),
  price: yup.number().typeError('価格は数値で入力してください').required('価格は必須です'),
  features: yup.string().required('特徴は必須です'),
})

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit(async (values) => {
  console.log(values)
  const result = await createProduct(values)
  if (!result.success) {
    console.error('商品作成に失敗しました:', result.error)
  }
})

const onClear = () => {
  resetForm()
}
</script>

<template>
  <div>
    <ProductForm />
    <div class="d-flex justify-center mt-4">
      <v-btn
        class="mr-2"
        @click="onSubmit"
      >
        登録
      </v-btn>
      <v-btn
        color="secondary"
        @click="onClear"
      >
        クリア
      </v-btn>
    </div>
  </div>
</template>
