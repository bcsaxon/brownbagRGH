/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  I18nManager,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {FlatList, RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

//  To toggle LTR/RTL change to `true`
I18nManager.allowRTL(false);

const DATA = [
  {
    id: '1',
    title: 'Running On Empty',
    artist: 'Jackson Browne',
  },
  {
    id: '2',
    title: 'Running On Empty',
    artist: 'Jackson Browne',
  },
  {
    id: '3',
    title: 'Running On Empty',
    artist: 'Jackson Browne',
  },
  {
    id: '4',
    title: 'Running On Empty',
    artist: 'Jackson Browne',
  },
];

type DataRow = {
  from: string;
  when: string;
  message: string;
};

const Row = ({item}: {item: DataRow}) => (
  // eslint-disable-next-line no-alert
  <RectButton style={styles.rectButton} onPress={() => window.alert(item.from)}>
    <Text style={styles.fromText}>{item.from}</Text>
    <Text numberOfLines={2} style={styles.messageText}>
      {item.message}
    </Text>
    <Text style={styles.dateText}>{item.when} ❭</Text>
  </RectButton>
);

const SwipeableRow = ({item, index}: {item: DataRow; index: number}) => {
  // <Row />;
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item, index}) => (
            <SwipeableRow item={item} index={index} />
          )}
          keyExtractor={(_item, index) => `message ${index}`}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  messageText: {
    color: '#999',
    backgroundColor: 'transparent',
  },
  dateText: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 20,
    top: 10,
    color: '#999',
    fontWeight: 'bold',
  },
});

export default App;

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;
