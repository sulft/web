// Création d'un model Recipe avec quelques recette codé en dur
class Recipe {
  String label;
  String imageUrl;

  Recipe(
      this.label,
      this.imageUrl,
      );

  static List<Recipe> samples = [
    Recipe("Spaghetti and Meatballs", "assets/2126/11929_ ef763de2b3_w.jpg"),
    Recipe("Tomato Soup", "assets/27729023535_a5/606cl1lbe.jpg"),
    Recipe("Grilled Cheese", "assets/3187380632_5056654a19_b.jpg"),
    Recipe("Chocolate Chip Cookies", "assets/15992102771_b92f4cc00a_b.jpg"),
    Recipe("Taco Salad", "assets/8533381643_a31a99e8a6_c.jpg"),
    Recipe("Hawaiian Pizza", "assets/154520357/77_294cefced5_c.jpg"),
  ];
}
