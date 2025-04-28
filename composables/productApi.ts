import {
  getFirestore,
  collection,
  doc,
  setDoc,
} from 'firebase/firestore'
import type { Product } from '@/types/product'

export const createProduct = async (product: Product) => {
  const db = getFirestore()
  const productsRef = collection(db, 'products')
  const docRef = doc(productsRef)
  await setDoc(docRef, product)
}
