import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_highlight/flutter_highlight.dart';
import 'package:flutter_highlight/themes/a11y-dark.dart';
import '../models/lesson.dart';

class LessonDetail extends StatelessWidget {
  final Lesson lesson;
  const LessonDetail({super.key, required this.lesson});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(backgroundColor: Colors.black, title: Text(lesson.title)),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(lesson.content, style: const TextStyle(fontSize: 16)),
            const SizedBox(height: 20),
            Container(
              padding: const EdgeInsets.all(10),
              color: Colors.grey[900],
              child: Row(
                children: [
                  Expanded(child: Text(lesson.command, style: const TextStyle(color: Colors.white))),
                  IconButton(
                    icon: const Icon(Icons.copy, color: Colors.green),
                    onPressed: () {
                      Clipboard.setData(ClipboardData(text: lesson.command));
                      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("کد کپی شد!")));
                    },
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
