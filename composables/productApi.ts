import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
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

export const getProducts = async (): Promise<Product[]> => {
  const db = getFirestore()
  const productsRef = collection(db, 'products')
  const snapshot = await getDocs(productsRef)
  return snapshot.docs.map(doc => doc.data() as Product)
}
