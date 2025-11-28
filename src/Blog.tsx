import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import AppTheme from './theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Contact from './components/Contact';

import Footer from './components/Footer';
import React from 'react';

export default function Blog(props: { disableCustomTheme?: boolean }) {
  const [view, setView] = React.useState<'products' | 'contact'>('products');

  const handleNavigate = (newView: 'products' | 'contact') => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: '100vh',
            width: '100vw',
            ...theme.applyStyles('dark', {
              backgroundImage:
                'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
            }),
          },
        })}
      />

      <AppAppBar onNavigate={handleNavigate} />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        {view === 'products' ? <MainContent /> : <Contact />}
      </Container>
      <Footer />
    </AppTheme>
  );
}
