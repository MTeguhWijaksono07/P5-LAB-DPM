import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FAB, Card, Title, Paragraph } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([
    { 
      id: '1', 
      title: 'Meeting hari ini', 
      content: 'Diskusi project baru',
      date: '29 Dec 2024'
    },
    { 
      id: '2', 
      title: 'Ide Project', 
      content: 'Membuat aplikasi catatan sederhana',
      date: '28 Dec 2024'
    },
  ]);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.content}</Paragraph>
        <Paragraph style={styles.date}>{item.date}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('AddNote')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;