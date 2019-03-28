/**
 * @format
 */
import { Navigation } from 'react-native-navigation';

import { SCREENS, registerScreens } from './src/screens/screens';

registerScreens();

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'navigation.playground.WelcomeScreen',
//       },
//     },
//   });
// });

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREENS.postList,
              options: {
                topBar: {
                  title: {
                    text: 'Blog',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
