import {
  getFirestore,
  collection,
  doc,
  setDoc,
} from 'firebase/firestore'
import { useApiSnackbar } from '@/stores/ApiSnackbar'
import type { Product } from '@/types/product'

export const createProduct = async (product: Product) => {
  console.log('createProduct', product)
  const apiSnackbar = useApiSnackbar()
  try {
    const db = getFirestore()
    const productsRef = collection(db, 'products')
    const docRef = doc(productsRef, product.id)
    await setDoc(docRef, product)
    apiSnackbar.openSnackbar('商品を作成しました', true)
  }
  catch (error) {
    console.error('商品作成中にエラーが発生しました:', error)
    apiSnackbar.openSnackbar('商品作成に失敗しました', false)
  }
}
