public class HelloWorld {
    public static void main(String[] args) {
      Car carOfTerry = new Car();
      Car carOfJean = new Car();
      carOfTerry.automatic = true;
      carOfTerry.color = "rouge";
      carOfTerry.nbDoor = 5;

      System.out.println("La voiture est " + carOfTerry.color + " et dispose de " + carOfTerry.nbDoor + " portes.");

      carOfTerry.Klaxonner();

      String chaine1 = new String("test");
      String chaine2 = new String("test");

      boolean bool = chaine1 == chaine2;
      System.out.println(bool);
    }

}
