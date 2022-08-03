
import './App.css';
import { Box, Button, Flex, ThemeProvider, Text } from 'theme-ui';
import { Frame } from './components/Frame';
import { theme } from './styles/theme';
import { PrimaryHeader } from './components/Text';
import { PrimaryButton, SecondaryButton, TertiaryButton, AddCartButton } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Flex
          sx={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100vw',
            padding: '1rem 2rem',
            backgroundColor: 'rgba(53,53,53,1)',
            color: '#fff',
            height: '300px',
          }}
        >
          <Text
            sx={{
              fontSize: 7,
            }}
          >
            Buttons & CTAs
          </Text>
          <Text
            sx={{
              fontSize: 7,
              fontStyle: 'italic',
            }}
          >
            maev
          </Text>
        </Flex>
        <Flex sx={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
        }}>
          {/* Put your components in here */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: '4rem',
              padding: '2rem',
            }}
          >
            <PrimaryButton />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: '4rem',
              padding: '2rem',
            }}
          >
            <SecondaryButton />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: '4rem',
              padding: '2rem',
            }}
          >
            <TertiaryButton />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: '4rem',
              padding: '2rem',
            }}
          >
            <AddCartButton />
          </Box>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
