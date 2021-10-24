import { useEffect } from 'react';
import io from 'socket.io-client';
import Chat from './components/chat';
import ChatList from './components/chatList';

let socket;

export default function App() {
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('join', '6174d836704d539dcb094e30');

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT]);

  return (
    <div className="wrapper">
      <ChatList items={['Hello', 'World', 'Romka', 'How', 'Are', 'You']} />
      <Chat />
    </div>
  );
}
