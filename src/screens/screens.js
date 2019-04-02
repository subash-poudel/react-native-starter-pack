import { Navigation } from 'react-native-navigation';

import PostList from './PostList';
import ViewPost from './ViewPost';

export const SCREENS = {
  postList: 'PostList',
  viewPost: 'ViewPost',
};

export function registerScreens() {
  Navigation.registerComponent(SCREENS.postList, () => PostList);
  Navigation.registerComponent(SCREENS.viewPost, () => ViewPost);
}
