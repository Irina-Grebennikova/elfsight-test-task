import { ThemeDefault } from '@/styles';

const getStatusColor = (status: string): keyof ThemeDefault['colors'] => {
  switch (status) {
    case 'Alive':
      return 'green';
    case 'Dead':
      return 'pink';
    default:
      return 'grey';
  }
};

export { getStatusColor };
