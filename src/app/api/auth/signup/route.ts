import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { prisma } from '../../../../lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, password } = body
    if (!email || !password) return NextResponse.json({ error: 'Email and password required' }, { status: 400 })

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) return NextResponse.json({ error: 'User already exists' }, { status: 409 })

    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { name, email, password: hashed } })
    return NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name: user.name } })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
