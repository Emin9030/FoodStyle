import EncryptedStorage from 'react-native-encrypted-storage'
import { StorageKeys } from '../config'

const setItem = async ({ key, userData }: { key: string; userData: any }): Promise<void> => {
  try {
    StorageKeys.hasOwnProperty(key) && (await EncryptedStorage.setItem(key, JSON.stringify(userData)))
  } catch (error) {
    console.error('Encrypted storage -> setItem', error)
  }
}

const getItem = async (key: string): Promise<string | void> => {
  try {
    const session = await EncryptedStorage.getItem(key)
    if (session) return session
  } catch (error) {
    console.error('Encrypted storage -> getItem', error)
  }
}

const removeItem = async (key: string): Promise<void> => {
  try {
    StorageKeys.hasOwnProperty(key) && (await EncryptedStorage.removeItem(key))
  } catch (error) {
    console.error('Encrypted storage -> removeItem', error)
  }
}

const clearStorage = async (): Promise<void> => {
  try {
    await EncryptedStorage.clear()
  } catch (error) {
    console.error('Encrypted storage -> clearStorage', error)
  }
}

export const IEncryptedStorage = {
  setItem,
  getItem,
  removeItem,
  clearStorage
}
