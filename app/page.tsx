import { Box, Heading } from '@chakra-ui/react';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>Tere tulemast meie mikro-SaaS rakendusse!</Heading>
      <Chatbot />
    </Box>
  );
}