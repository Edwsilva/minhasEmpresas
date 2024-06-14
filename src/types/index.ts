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
  atividadesDisponiveis: string[];
};

export type { Procurador, Empresa };
