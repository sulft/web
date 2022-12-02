import 'package:flutter/material.dart';
import 'recipe.dart';

void main() {
  runApp(const RecipeApp());
}

class RecipeApp extends StatelessWidget {
  const RecipeApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {

    final ThemeData a = ThemeData();
    return MaterialApp(
      title: 'Recipe Calculator',
      theme: a.copyWith(
        colorScheme: a.colorScheme.copyWith(
          primary: Colors.grey,
          secondary: Colors.black,
        ),
      ),
      home: const MyHomePage(title: 'Recipe Calculator'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {

    return Scaffold( // création du cors de mon application
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: SafeArea( //Espace ajouté entre le corps de mon application et le notch que l'on peut trouvé sur certain appareil
        child: Container(), // ajout d'un conteneur
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
