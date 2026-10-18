const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL || 'admin@ntumba.test'
  const password = process.env.SEED_ADMIN_PASSWORD || 'password123'
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    console.log('Admin already exists')
    return
  }
  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({ data: { name: 'Admin', email, password: hashed } })
  console.log('Created admin:', user.email)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
