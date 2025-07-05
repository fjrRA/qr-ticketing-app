// src/app/api/user/update-profile/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@lib/prisma'

export async function PUT(req: NextRequest) {
  try {
    const { email, name, phone_number, address } = await req.json()

    const updatedUser = await prisma.users.update({
      where: { email },
      data: { name, phone_number, address },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error('Error updating user:', error)
    return new NextResponse('Gagal memperbarui profil', { status: 500 })
  }
}
