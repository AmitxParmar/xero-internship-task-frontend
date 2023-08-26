type Credentials = {
  [key: string]: string | undefined | null
}
export function validateUserCredentials(credentials: Credentials) {
  for (const key in credentials) {
    if (credentials.hasOwnProperty(key)) {
      const value = credentials[key]
      if (
        value === undefined ||
        value === null ||
        value === "" ||
        value.length < 6
      ) {
        return false
      }
    }
  }
  return true
}
