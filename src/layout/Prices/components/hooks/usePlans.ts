export const usePlans = () => {
  const plans = [
    {
      title: 'Incrição Mensal',
      description: 'Incluso todas estatísticas de futebol e acesso ao grupo premium do telegram.',
      value: 'R$69.90',
      fullValue: 'R$89.90',
      period: 'por mês',
    },
    {
      title: 'Incrição Trimestral',
      description: 'Incluso todas estatísticas de futebol e acesso ao grupo premium do telegram.',
      value: 'R$189.90',
      fullValue: 'R$269.90',
      period: 'a cada três meses',
    },
    {
      title: 'Incrição anual',
      description: 'Incluso todas estatísticas de futebol e acesso ao grupo premium do telegram.',
      value: 'R$671.90',
      fullValue: 'R$1079,90',
      period: 'por ano',
    },
  ];

  return { plans };
};
