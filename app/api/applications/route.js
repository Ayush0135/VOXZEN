import { initDatabase } from '@/lib/database'
import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const data = await request.json()

        // Validate required fields
        const requiredFields = ['full_name', 'email', 'phone']
        for (const field of requiredFields) {
            if (!data[field]) {
                return NextResponse.json(
                    { error: `${field} is required` },
                    { status: 400 }
                )
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(data.email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Initialize database
        const db = initDatabase()

        // Insert application
        const insert = db.prepare(`
      INSERT INTO applications (
        full_name, email, phone, current_occupation, 
        investment_readiness, youtube_experience, goals,
        preferred_niche, how_heard, additional_info
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)

        const result = insert.run(
            data.full_name,
            data.email,
            data.phone,
            data.current_occupation || null,
            data.investment_readiness || null,
            data.youtube_experience || null,
            data.goals || null,
            data.preferred_niche || null,
            data.how_heard || null,
            data.additional_info || null
        )

        db.close()

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully',
            id: result.lastInsertRowid
        })

    } catch (error) {
        console.error('Error submitting application:', error)
        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        )
    }
}

export async function GET() {
    try {
        const db = initDatabase()

        const applications = db.prepare('SELECT * FROM applications ORDER BY created_at DESC').all()

        db.close()

        return NextResponse.json({ applications })
    } catch (error) {
        console.error('Error fetching applications:', error)
        return NextResponse.json(
            { error: 'Failed to fetch applications' },
            { status: 500 }
        )
    }
}
