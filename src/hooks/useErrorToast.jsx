import { useCallback } from 'react';
import { toast } from '@pheralb/toast';

const useErrorToast = () => {
  const showError = useCallback((message) => {
    toast.error({
      theme: 'light',
      text: 'Error',
      description: message,
    });
  }, []);

  return showError;
};

export default useErrorToast;