import 'package:flutter/material.dart';

class AppTheme {
  static const Color terminalGreen = Color(0xFF00FF00);
  static const Color terminalBlack = Color(0xFF000000);
  
  static ThemeData darkTheme = ThemeData(
    scaffoldBackgroundColor: terminalBlack,
    primaryColor: terminalGreen,
    textTheme: const TextTheme(
      bodyMedium: TextStyle(color: terminalGreen, fontFamily: 'Courier'),
    ),
  );
}
