export function saveToSessionStorage(key: string, value: unknown) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getFromSessionStorage<T>(key: string): T | null {
  const item = sessionStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
}

export function removeSessionStorage(key: string) {
  sessionStorage.removeItem(key);
}
