import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from './screens';

class PostsList extends PureComponent {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Add Post',
        },
      },
    };
  }

    postClicked = () => {
      const { componentId } = this.props;
      Navigation.push(componentId, {
        component: {
          name: SCREENS.viewPost,
        },
        passProps: {
          text: 'From Post List to View List',
        },
        options: {
          topBar: {
            title: {
              text: 'View Post Screen',
            },
          },
        },
      });
    }

    onNavigationButtonPressed = (buttonId) => {
      if (buttonId === 'addPost') {
        this.showAddPostModal();
      }
    }

    showAddPostModal = () => {
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: SCREENS.addPost,
              },
            },
          ],
        },
      });
    }

    render() {
      return (
        <View>
          <Text onPress={this.postClicked}>Posts List Screen</Text>
        </View>
      );
    }
}

PostsList.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default PostsList;
