import { Navigation } from 'react-native-navigation';

import AddPost from './AddPost';
import PostList from './PostList';
import ViewPost from './ViewPost';

export const SCREENS = {
  addPost: 'AddPost',
  postList: 'PostList',
  viewPost: 'ViewPost',
};

export function registerScreens() {
  Navigation.registerComponent(SCREENS.addPost, () => AddPost);
  Navigation.registerComponent(SCREENS.postList, () => PostList);
  Navigation.registerComponent(SCREENS.addPost, () => ViewPost);
}
