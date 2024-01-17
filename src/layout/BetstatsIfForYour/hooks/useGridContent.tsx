import { AttentionIcon } from '@/assets/icons/Attention';
import { ConsistenceIcon } from '@/assets/icons/Consistence';
import { DataIcon } from '@/assets/icons/Data';
import { NotebookIcon } from '@/assets/icons/Notebook';
import { RocketIcon } from '@/assets/icons/Rocket';
import { SearchIcon } from '@/assets/icons/Search';

export const useGridContent = () => {
  const articles = [
    {
      icon: <DataIcon />,
      title: 'Valoriza decisões baseadas em dados:',
      body: 'Você entende que apostas bem-sucedidas são mais ciência do que sorte.-nCom a Betstats, você tem acesso a análises estatísticas aprofundadas que fundamentam cada aposta.',
    },
    {
      icon: <ConsistenceIcon />,
      title: 'Busca consistência em seus ganhos:',
      body: 'Se você está cansado de altos e baixos e busca uma abordagem mais consistente e confiável para apostas esportivas, a Betstats é a escolha ideal.',
    },
    {
      icon: <AttentionIcon />,
      title: 'Está cansado de perder por falta de informação:',
      body: 'Se você está frustrado com apostas mal sucedidas devido a falta de informações precisas e análises confiáveis, a Betstats é a solução que irá transformar suas apostas.',
    },
    {
      icon: <NotebookIcon />,
      title: 'Prefere uma abordagem estratégica:',
      body: 'Longe de palpites aleatórios, você busca estratégias embasadas que maximizem as chances de sucesso.-nA Betstats fornece esse nível de estratégia.',
    },
    {
      icon: <RocketIcon />,
      title: 'Deseja aprender, lucrar e crescer:',
      body: 'Você vê as apostas não apenas como uma forma de ganhar dinheiro, mas também como uma oportunidade de aprender mais sobre esportes e análise de dados.',
    },
    {
      icon: <SearchIcon />,
      title: 'Busca apostas mais profissionais e menos emocionais:',
      body: 'Se você quer migrar de um apostador impulsivo para um estrategista calculista, que baseia suas decisões em lógica e dados em vez de emoção, a Betstats é o caminho para essa evolução.',
    },
  ];

  return { articles };
};
