import prisma from '@lib/prisma'
import bcrypt from 'bcryptjs'

async function main() {
  const hashed = await bcrypt.hash('Myb@turr4den2025', 10)

  await prisma.users.upsert({
    where: { email: 'admin@mybaturraden.com' },
    update: {},
    create: {
      user_id: 'A000000001',
      name: 'Super Admin',
      email: 'admin@mybaturraden.com',
      password: hashed,
      role: 'admin',
    },
  })

  console.log('✅ Admin account created!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    process.exit()
  })
