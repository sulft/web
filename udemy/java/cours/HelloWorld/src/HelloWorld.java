public class HelloWorld {
    public static void main(String[] args) {
      Car carOfTerry = new Car();
      carOfTerry.color = "rouge";
      carOfTerry.nbDoor = 5;

      Moteur moteur = new Moteur();
      moteur.carburation = "Diesel";
      moteur.nbCylindres = 6;
      carOfTerry.moteur = moteur;

      Passenger passenger = new Passenger();
      passenger.lastName = "Vilver";
      passenger.name = "Terry";

      City city = new City();
      city.name = "Aukland";


      System.out.println("Nombre de cylindre de la voiture de Terry : " + carOfTerry.moteur.nbCylindres);
      System.out.println("Carburation cylindre de la voiture de Terry : " + carOfTerry.moteur.carburation);
      City destination = carOfTerry.transporter(passenger, city);
      System.out.println("Le passager est arrivé dans la ville de "+ destination.name);
    }

}
