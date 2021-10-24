import { useEffect } from 'react';
import io from 'socket.io-client';

let socket;

export default function App() {
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT]);

  return <div></div>;
}
