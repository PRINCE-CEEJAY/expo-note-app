import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Notes = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {Array(50)
          .fill(0)
          .map((_, i) => (
            <Text
              style={styles.text}
              key={i}
            >
              Notes {i + 1}
            </Text>
          ))}
      </ScrollView>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  scrollView: {
    width: '98%',
    padding: 20,
    backgroundColor: '#49074e',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
});
