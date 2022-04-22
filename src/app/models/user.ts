export interface User {
  id?: number;
  name?: string;
  vara?: number;
  email?: string;
  password?: string;
  situacoes_Id?: number;
  niveis_Acesso_Id?: number;
  created?: Date;
  modified?: Date;
  isVerification?: number;
}
