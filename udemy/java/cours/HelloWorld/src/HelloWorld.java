public class HelloWorld {
  public static void main(String[] args) {
    Car carOfTerry = new Car((String) "rouge", (byte) 5);
    carOfTerry.vitesse = 40;
    carOfTerry.accélérer(60);
    System.out.println("carOfTerry couleur = " + carOfTerry.couleur + "\ncarOfTerry nbPorte = " + carOfTerry.nbPorte);

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
    System.out.println("Le passager est arrivé dans la ville de " + destination.name);
    System.out.println("le nombre de roue de la voiture de Terry est : " + carOfTerry.nbRoues);
    System.out.println("le nombre de roue de la voiture de John est : " + Car.nbRoues);

    Car.Klaxonner();
    
  }

}
