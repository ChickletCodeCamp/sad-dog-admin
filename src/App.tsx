import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LoginForm } from '@/components/login';

import './App.css';

const queryClient = new QueryClient();

const PageWithQueryProvider = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

const App = () => {
  return (
    <PageWithQueryProvider>
      <LoginForm />
    </PageWithQueryProvider>
  );
};

export default App;
