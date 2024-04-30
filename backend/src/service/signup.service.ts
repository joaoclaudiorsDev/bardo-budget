import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const signupService = async (username: string, password: string) => {
  if (!username || !password) {
    throw new Error("Nome de usuário e senha são obrigatórios");
  }

  try {
    const existingUser = await prisma.customer.findFirst({
      where: { username }
    });

    if (existingUser) {
      throw new Error("Nome de usuário já está em uso");
    }

    const customer = await prisma.customer.create({
      data: {
        username,
        password,
        status: true
      }
    });

    return customer;
  } catch (error) {
    console.error('Erro ao criar conta:', error);
    throw new Error('Erro ao criar conta');
  }
};
