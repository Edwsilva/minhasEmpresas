type Procurador = {
  nome: string;
  periodo: string;
  atividades: string[];
  status: 'APROVADO' | 'PENDENTE' | 'REPROVADO';
};

type Empresa = {
  id: number;
  nome: string;
  nomeFantasia: string;
  representante: string;
  cnpj: string;
  procuradores: Procurador[];
};

export type { Procurador, Empresa };
