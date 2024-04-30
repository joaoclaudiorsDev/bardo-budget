import { Request, Response } from 'express';
import { signupService } from '../service/signup.service';

export const signupController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const customer = await signupService(username, password);
    res.status(200).json({ message: 'Conta criada com sucesso', customer });
  } catch (error) {   
    console.error('Erro durante a criação da conta:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
