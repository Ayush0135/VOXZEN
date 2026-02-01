import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Database file path
const dbPath = path.join(process.cwd(), 'applications.db')

// Initialize database
export function initDatabase() {
  const db = new Database(dbPath)

  // Create applications table
  const createTable = `
    CREATE TABLE IF NOT EXISTS applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      current_occupation TEXT,
      investment_readiness TEXT,
      youtube_experience TEXT,
      goals TEXT,
      preferred_niche TEXT,
      how_heard TEXT,
      additional_info TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'pending'
    )
  `

  db.exec(createTable)

  return db
}

// Get database instance
export function getDatabase() {
  const db = new Database(dbPath)
  return db
}
