import React, { useState } from 'react';
import { View, Text, Switch, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useAppStore } from '../store/useAppStore';
import { colors } from '../theme/colors';
import { QuizEngine } from '../components/Quiz/QuizEngine';

const MOCK_QUESTIONS = [
  { text: "کدام دستور برای بروزرسانی پکیج‌هاست؟", options: [{text: "apt update", isCorrect: true}, {text: "apt install", isCorrect: false}] }
];

export default function HomeScreen() {
  const { theme, toggleTheme, isQuizActive, setQuizActive, resetProgress } = useAppStore();
  const currentColors = colors[theme];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentColors.background }]}>
      <View style={styles.header}>
        <Text style={{ color: currentColors.text, fontSize: 20 }}>Termux Learning</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>

      {isQuizActive ? (
        <QuizEngine questions={MOCK_QUESTIONS} onComplete={(s) => { alert(`امتیاز شما: ${s}`); setQuizActive(false); }} />
      ) : (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => setQuizActive(true)}><Text style={{color: currentColors.text}}>شروع آزمون</Text></TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={resetProgress}><Text style={{color: currentColors.text}}>ریست پیشرفت</Text></TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  menuItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }
});
