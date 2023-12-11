import { GlobalStyles } from '@/theme/GlobalStyles';
import { useTheme } from '@/theme/useTheme';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import ThemeSelector from './components/ThemeSelector';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

export default function LandingPage() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <div>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <span>Theming System</span>
            <p>
              Hey, There! It's great when the control is with you. The theming
              system helps you in building a theme of your choice and apply it
              to test live. Why wait? Just give it a try.
            </p>

            <ThemeSelector setter={setSelectedTheme} />
          </Container>
        </ThemeProvider>
      )}
    </div>
  );
}

// import * as themes from '../theme/schema.json';
// import { setToLS } from '@/utils/storage';
// import LandingPage from './landing-page';

// export default function IndexPage() {
//   console.log('themes.default', themes.default);
//   setToLS('all-themes', themes.default);

//   return (
//     <div>
//       <LandingPage />
//     </div>
//   );
// }
