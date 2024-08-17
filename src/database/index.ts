import { drizzle } from 'drizzle-orm/expo-sqlite'
import { openDatabaseSync } from 'expo-sqlite'

const sqlite = openDatabaseSync("db.sqlite")
const db = drizzle(sqlite)

export { db }
