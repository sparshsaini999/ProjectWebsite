import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Import all routes from views
import { router } from './views';

// CSS imports
import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { GlobalStyle } from './global.styled';

// Antd config provider for handling the Antd components throughout the app
import { ConfigProvider } from 'antd';
import { THEME } from './constants/AppConst';

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: THEME?.primaryColor,
            borderRadius: THEME?.borderRadius,
            fontFamily: 'inherit',
          },
        }}
      >
        <GlobalStyle />
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
