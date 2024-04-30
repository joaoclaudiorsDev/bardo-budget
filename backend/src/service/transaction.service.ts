import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTransaction = async (customerId: string, value: number, description: string, type: 'GAIN' | 'EXPENSE'): Promise<any> => {
  try {
    const transaction = await prisma.transaction.create({
      data: {
        customerId,
        value,
        description,
        type
      }
    });
    return transaction;
  } catch (error) {
    console.error('Erro ao criar transação:', error);
    throw new Error('Erro ao criar transação');
  }
};
