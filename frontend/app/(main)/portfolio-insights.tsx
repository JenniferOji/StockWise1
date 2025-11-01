import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PortfolioInsights() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Portfolio Insights Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 24 },
  title: { fontSize: 20, fontWeight: '700' },
});
