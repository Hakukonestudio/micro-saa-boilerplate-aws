import { ClerkProvider } from '@clerk/nextjs';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="et">
      <body>
        <ClerkProvider>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}