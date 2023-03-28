public class HelloWorld {
    public static void main(String[] args) {
      Car carOfTerry = new Car();
      carOfTerry.automatic = true;
      carOfTerry.color = "rouge";
      carOfTerry.nbDoor = 5;

      System.out.println("La voiture est " + carOfTerry.color + " et dispose de " + carOfTerry.nbDoor + " portes.");

      carOfTerry.Klaxonner();

      int nouveauRapport = carOfTerry.passerRapport(true);
      nouveauRapport = carOfTerry.passerRapport(true);
      nouveauRapport = carOfTerry.passerRapport(true);
      nouveauRapport = carOfTerry.passerRapport(false);


      System.out.println("Le nouveau rapport est : " + nouveauRapport);

      carOfTerry.tourner("gauche",50);
    }

}
