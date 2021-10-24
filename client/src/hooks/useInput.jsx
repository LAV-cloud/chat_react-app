import { useState } from 'react';

export default function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    clear: () => setValue(defaultValue),
    value: () => value,
  };
}
