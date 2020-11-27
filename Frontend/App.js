// import React from 'react'

// import { StatusBar } from 'expo-status-bar'

// import { Text, View } from 'react-native'

// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Text>test!</Text>
//       <StatusBar style="auto" />
//     </View>
//   )
// }

// export default App






// import React from 'react'

// import { ThemeProvider, Button } from 'react-native-elements'

// const theme = {
//   Button: {
//     titleStyle: {
//       color: 'red',
//     },
//   },
// }


// const App = () => {
//   return (
//     <ThemeProvider
//       theme={theme}
//     >
//       <Button title="test" />
//       <Button title="test2" />
//     </ThemeProvider>
//   )
// }

// export default App





// import React from 'react'

// import { NativeRouter, Route, Link } from 'react-router-native'

// import { StyleSheet, Text, View, AppRegistry } from 'react-native'

// const Home = () => <Text style={styles.header}>Home</Text>;

// const About = () => <Text style={styles.header}>About</Text>;

// const Topic = ({ match }) => (
//   <Text style={styles.topic}>{match.params.topicId}</Text>
// );

// const Topics = ({ match }) => (
//   <View>
//     <Text style={styles.header}>test</Text>
//     <View>
//       <Link
//         to={`${match.url}/rendering`}
//         style={styles.subNavItem}
//         underlayColor="#f0f4f7"
//       >
//         <Text>Rendering with React</Text>
//       </Link>
//       <Link
//         to={`${match.url}/components`}
//         style={styles.subNavItem}
//         underlayColor="#f0f4f7"
//       >
//         <Text>Components</Text>
//       </Link>
//       <Link
//         to={`${match.url}/props-v-state`}
//         style={styles.subNavItem}
//         underlayColor="#f0f4f7"
//       >
//         <Text>Props v. State</Text>
//       </Link>
//     </View>

//     <Route path={`${match.path}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.path}
//       render={() => (
//         <Text style={styles.topic}>Please select a topic.</Text>
//       )}
//     />
//   </View>
// );

// const App = () => (
//   <NativeRouter>
//     <View style={styles.container}>
//       <View style={styles.nav}>
//         <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>Home</Text>
//         </Link>
//         <Link
//           to="/about"
//           underlayColor="#f0f4f7"
//           style={styles.navItem}
//         >
//           <Text>About</Text>
//         </Link>
//         <Link
//           to="/topics"
//           underlayColor="#f0f4f7"
//           style={styles.navItem}
//         >
//           <Text>Topics</Text>
//         </Link>
//       </View>

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </View>
//   </NativeRouter>
// );

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 25,
//     padding: 10
//   },
//   header: {
//     fontSize: 20
//   },
//   nav: {
//     flexDirection: "row",
//     justifyContent: "space-around"
//   },
//   navItem: {
//     flex: 1,
//     alignItems: "center",
//     padding: 10
//   },
//   subNavItem: {
//     padding: 5
//   },
//   topic: {
//     textAlign: "center",
//     fontSize: 15
//   }
// });

// export default App

import React, { Fragment } from 'react'

import { View } from 'react-native'

import { Header, Text, Icon } from 'react-native-elements'

import LeftHeader from './Components/Containers/Headers/LeftHeader'
import RightHeader from './Components/Containers/Headers/RightHeader'

const App = () => {
  return (
    <Fragment>
      <Header
        barStyle='default'
        statusBarProps={{ backgroundColor: 'black' }}
        backgroundColor='black'
        leftComponent={<LeftHeader />}
        rightComponent={<RightHeader />}
      />
      <Text>
        tes
    </Text>
      <Text>
        tes
    </Text>
    </Fragment>
  )
}

export default App