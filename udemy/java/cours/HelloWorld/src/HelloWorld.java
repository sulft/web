public class HelloWorld {
    public static void main(String[] args) {
      Car carOfTerry = new Car();
      carOfTerry.color = "rouge";
      carOfTerry.nbDoor = 5;

      Moteur moteur = new Moteur();
      moteur.carburation = "Diesel";
      moteur.nbCylindres = 6;
      carOfTerry.moteur = moteur;

      System.out.println("Nombre de cylindre de la voiture de Terry : " + carOfTerry.moteur.nbCylindres);
      System.out.println("Carburation cylindre de la voiture de Terry : " + carOfTerry.moteur.carburation);

    }

}
