import type { AppProps } from 'next/app';

import { ChakraProvider, localStorageManager } from '@chakra-ui/react';

import { theme } from '../styles/theme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('chakra-ui-color-mode', 'dark');
	}

	return (
		<ChakraProvider theme={theme} colorModeManager={localStorageManager}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
