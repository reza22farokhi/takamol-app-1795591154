import 'package:flutter/material.dart';
import '../models/lesson.dart';
import 'lesson_detail.dart';

class HomeScreen extends StatelessWidget {
  final List<Lesson> lessons = [
    Lesson(id: 1, title: "نصب اولیه", content: "برای آپدیت ترموکس از دستور زیر استفاده کنید:", command: "pkg update && pkg upgrade", category: "مبتدی"),
    Lesson(id: 2, title: "نصب پایتون", content: "برای اجرای اسکریپت‌های پایتون:", command: "pkg install python", category: "متوسط"),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("آموزش جامع ترموکس")),
      body: ListView.builder(
        itemCount: lessons.length,
        itemBuilder: (context, index) => ListTile(
          title: Text(lessons[index].title, style: const TextStyle(color: Colors.green)),
          onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => LessonDetail(lesson: lessons[index]))),
        ),
      ),
    );
  }
}
