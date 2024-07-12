import AppRoutes from './routes';
import { ChakraProvider } from '@chakra-ui/react';


const App = () => {
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  );
};

export default App;
