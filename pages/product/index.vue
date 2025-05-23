<script setup lang="ts">
import { getProducts } from '@/composables/productApi'
import type { Product } from '@/types/product'

const products = ref<Product[]>([])

onMounted(async () => {
  products.value = await getProducts()
  console.log(products.value)
})
</script>

<template>
  <div>
    <v-card
      v-for="product in products"
      :key="product.id"
      class="my-2"
    >
      <v-card-title>
        {{ product.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ product.id }}
      </v-card-subtitle>
      <v-card-text>
        {{ product.features }}
      </v-card-text>
      <v-card-text>
        <div>
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <ItemLabel
                label="焙煎度"
              >
                <v-chip>
                  {{ product.roast_level }}
                </v-chip>
              </ItemLabel>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <ItemLabel
                label="カテゴリー"
              >
                <v-chip>
                  {{ product.category }}
                </v-chip>
              </ItemLabel>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <ItemLabel
                label="内容量"
              >
                <p class="text-primary">
                  {{ product.volume }}g
                </p>
              </ItemLabel>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <ItemLabel
                label="価格"
              >
                <p class="text-primary">
                  ￥{{ product.price }}
                </p>
              </ItemLabel>
            </v-col>
          </v-row>
        </div>
      </v-card-text>

      <v-card-item>
        <v-btn
          color="secondary"
          block
        >
          在庫管理
        </v-btn>
      </v-card-item>
    </v-card>
  </div>
</template>
