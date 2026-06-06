import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CreateNote = () => {
  return (
    <View style={styles.container}>
      <Text>Create Note</Text>
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
