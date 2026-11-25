import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppStore } from '../../store/useAppStore';
import { colors } from '../../theme/colors';

export const QuizEngine = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const { theme } = useAppStore();
  const currentColors = colors[theme];

  const handleAnswer = (isCorrect) => {
    const newScore = isCorrect ? score + 1 : score;
    if (currentIndex < questions.length - 1) {
      setScore(newScore);
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newScore);
    }
  };

  const question = questions[currentIndex];

  return (
    <View style={[styles.container, { backgroundColor: currentColors.surface }]}>
      <Text style={[styles.title, { color: currentColors.text }]}>سوال {currentIndex + 1} از {questions.length}</Text>
      <Text style={[styles.question, { color: currentColors.text }]}>{question.text}</Text>
      {question.options.map((opt, i) => (
        <TouchableOpacity 
          key={i} 
          style={[styles.button, { backgroundColor: currentColors.primary }]}
          onPress={() => handleAnswer(opt.isCorrect)}
        >
          <Text style={{ color: '#FFF' }}>{opt.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, borderRadius: 12, margin: 10 },
  title: { fontSize: 14, marginBottom: 10 },
  question: { fontSize: 18, marginBottom: 20, fontWeight: 'bold' },
  button: { padding: 15, borderRadius: 8, marginBottom: 10 }
});
