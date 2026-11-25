import 'package:flutter/material.dart';
import 'screens/home_screen.dart';
import 'core/constants/theme.dart';

void main() => runApp(const TermuxApp());

class TermuxApp extends StatelessWidget {
  const TermuxApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: AppTheme.darkTheme,
      home: HomeScreen(),
    );
  }
}
