
import { Routes, Route } from 'react-router';
import Index from '@/pages/Index';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}
