import { ButtonScheme } from '..';

export const useButton = () => {
  const getSchemeClassname = (scheme: ButtonScheme) => {
    if (scheme === 'gradient') {
      return 'bg-green-gradient text-text-primary border-none';
    }

    if (scheme === 'outlined') {
      return 'bg-transparent text-text-primary border border-brand-primary';
    }

    if (scheme === 'white-outlined') {
      return 'bg-transparent text-text-primary border border-text-primary';
    }
  };

  return { getSchemeClassname };
};
