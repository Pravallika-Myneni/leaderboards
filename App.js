import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DataTable, Avatar } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Leader Board</Text>

      <DataTable style={styles.board} >
        <DataTable.Header>
          <DataTable.Title style={styles.header}>Avatar</DataTable.Title>
          <DataTable.Title style={styles.header}>User Name</DataTable.Title>
          <DataTable.Title numeric style={styles.header}>Points</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>
          <Avatar.Image size={50} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\f-1.png')} />
          </DataTable.Cell>
          <DataTable.Cell>Rita</DataTable.Cell>
          <DataTable.Cell numeric><Avatar.Image size={30} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\1500.png')} /></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
          <Avatar.Image size={50} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\m-1.png')} />
          </DataTable.Cell>
          <DataTable.Cell>Bob</DataTable.Cell>
          <DataTable.Cell numeric><Avatar.Image size={30} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\1250.png')} /></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
          <Avatar.Image size={50} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\m-2.png')} />
          </DataTable.Cell>
          <DataTable.Cell>Sam</DataTable.Cell>
          <DataTable.Cell numeric><Avatar.Image size={30} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\1100.png')} /></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
          <Avatar.Image size={50} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\f-2.png')} />
          </DataTable.Cell>
          <DataTable.Cell>Ines</DataTable.Cell>
          <DataTable.Cell numeric><Avatar.Image size={30} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\900.png')} /></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
          <Avatar.Image size={50} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\f-3.png')} />
          </DataTable.Cell>
          <DataTable.Cell>Kim</DataTable.Cell>
          <DataTable.Cell numeric><Avatar.Image size={30} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\750.png')} /></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
          <Avatar.Image size={50} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\m-3.png')} />
          </DataTable.Cell>
          <DataTable.Cell>Ryan</DataTable.Cell>
          <DataTable.Cell numeric><Avatar.Image size={30} source={require('C:\\Users\\Pravallika Myneni\\leaderboard-fin\\assets\\img\\500.png')} /></DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },

  board :{

    backgroundColor: "#eaeaea",
    borderBottomWidth: 0

  },

  header : {
    fontWeight: 'bold',
    fontSize: 30,
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
  
});