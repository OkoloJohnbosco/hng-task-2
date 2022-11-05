import {useEffect, useRef} from 'react';

function useFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return {inputRef};
}

export default useFocus;
