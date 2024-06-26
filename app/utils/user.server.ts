import bcrypt from 'bcryptjs'
import { prisma } from './prisma.server'
import { SignUpForm } from './types.server';

export const createUser = async (user: SignUpForm) => {
    const passwordHash = await bcrypt.hash(user.password, 10);
    const newUser = await prisma.user.create({
        data: {
            email: user.email,
            password: passwordHash,
            profile: {
                firstName: user.firstName,
                lastName: user.lastName
            }
        }
    })
    return { id: newUser.id, email: newUser.email }
}