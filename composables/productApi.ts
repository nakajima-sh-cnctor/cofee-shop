import {
  getFirestore,
  collection,
  doc,
  setDoc,
} from 'firebase/firestore'
import type { Product } from '@/types/product'

export const createProduct = async (product: Product) => {
  try {
    const db = getFirestore()
    const productsRef = collection(db, 'products')
    const docRef = doc(productsRef, product.id)
    await setDoc(docRef, product)
    return { success: true }
  }
  catch (error) {
    console.error('商品作成中にエラーが発生しました:', error)
    return { success: false, error }
  }
}
