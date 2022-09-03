import { Routes, Route } from 'react-router-dom';
import Chat from './pages/chat';
import SignIn from './pages/auth';
import NotFound from './pages/notFound';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/chat-room" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
