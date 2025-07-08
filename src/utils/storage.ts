type StorageType = "local" | "session";

const getStorage = (type: StorageType): Storage =>
  type === "local" ? localStorage : sessionStorage;

export function saveToStorage(
  key: string,
  value: unknown,
  type: StorageType = "local",
) {
  try {
    getStorage(type).setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to save to ${type}Storage:`, error);
  }
}

export function getFromStorage<T>(
  key: string,
  type: StorageType = "local",
): T | null {
  try {
    const item = getStorage(type).getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error(`Failed to get from ${type}Storage:`, error);
    return null;
  }
}
export function removeFromStorage(key: string, type: StorageType = "local") {
  try {
    getStorage(type).removeItem(key);
  } catch (error) {
    console.error(`Failed to remove from ${type}Storage:`, error);
  }
}
