import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function News() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>News</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 24 },
  title: { fontSize: 20, fontWeight: '700' },
});
