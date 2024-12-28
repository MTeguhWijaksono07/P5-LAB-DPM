import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const AddNoteScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    // Di aplikasi nyata, Anda akan menyimpan catatan ke state global
    // Untuk sekarang, kita hanya kembali ke halaman sebelumnya
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Judul"
        value={title}
        onChangeText={setTitle}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Isi Catatan"
        value={content}
        onChangeText={setContent}
        mode="outlined"
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <Button 
        mode="contained" 
        onPress={handleSave}
        style={styles.button}
      >
        Simpan
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});

export default AddNoteScreen;