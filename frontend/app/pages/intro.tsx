import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default function IntroPage() {

  const handleStart = () => {
   
  };
   return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Stock Wise</Text>
  
          <Text style={styles.subtitle}>Your portfolio. Simplified</Text>
  
          <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>Optimise now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E3F2FD', 
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 25,
    },
    content: {
      width: '100%',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: '#0B3D91', 
      marginBottom: 16,
    },
    subtitle: {
      fontSize: 18,
      color: '#1967B2', 
      textAlign: 'center',
      marginBottom: 28,
      paddingHorizontal: 8,
    },
    button: {
      backgroundColor: '#0B3D91',
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 28,
      minWidth: Math.min(320, width * 0.7),
      alignItems: 'center',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '700',
    },
  });
  
  
