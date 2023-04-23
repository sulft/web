public class VehiculeAMoteur {
  Moteur moteur;
  int vitesse;

  int accélérer(int vitesse) {
    System.out.println("J'accélère à " + (vitesse + this.vitesse) + "km/h");
    return vitesse + this.vitesse;
  }

  City transporter(Passenger passenger, City cityDeparture) {
    System.out.println("le véhicule a moteur un passager qui s'appelle " + passenger.name + " " + passenger.lastName);
    System.out.println("Le passager est parti de la ville de " + cityDeparture.name);

    City cityDestination = new City();
    cityDestination.name = "Wellington";
    return cityDestination;
  }
}
