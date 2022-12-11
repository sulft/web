import 'package:flutter/material.dart'; // package qui permet d'utiliser tout les widgets material pour android

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: BasicsPage(), //initialisation de la classe
    );
  }
}

//créons notre propre stateless Widget
class BasicsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) { //Décrit dans quel contexte est crée l'interface utilisateur taille,couleur, etc ...
    var size = MediaQuery.of(context).size; //permet de récupérer la taille de notre écran
    return Scaffold(
      body: Container(
        height: size.height,
        width: size.width,
        color: Colors.blue,
        // padding: EdgeInsets.only(top:150),
        child: Center(
            child: Container(
              width: 80,
              height: 80,
              color: Colors.red,
            ),
        ),
      ),
    );
  }

  //utilisation du widget text.rich
  Text spanDemo() {
    return const Text.rich(
        TextSpan(
            text: 'Salut',
            style: TextStyle(color: Colors.red),
            children: [
              TextSpan(
                text: ' second style',
                style: TextStyle(fontSize: 30, color: Colors.grey),
              ),
              TextSpan(
                text : ' A l\'infini',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold,color: Colors.white),
              )
            ]
        )
    );
  }
}

//utilisation du widget text
Text simple(String text) {
  return Text(
    text,
    style:const TextStyle(
      color: Colors.green,
      fontSize: 40,
      fontWeight: FontWeight.w200,
      fontStyle: FontStyle.italic,
    ),
    textAlign: TextAlign.right,
  );
}

Icon monIcone() {
  return Icon(
    Icons.house,
    size: 30,
    color: Colors.white
  );
}
