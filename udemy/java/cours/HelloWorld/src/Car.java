public class Car extends VehiculeAMoteur{
  static int nbRoues = 4;
  byte nbPorte;
  boolean automatic;
  String couleur;
  int rapportCourant;


  Car() {
    System.out.println("Une voiture est en cours de construction");
  }

  Car(String couleur) {
    this.couleur = couleur;
    System.out.println("Une voiture est construite avec sa couleur.");
  }

  Car(byte nbPorte) {
    this.nbPorte = nbPorte;
    System.out.println("Une voiture est construite avec son nombre de porte.");
  }

  Car(String couleur, byte nbPorte) {
    this.nbPorte = nbPorte;
    this.couleur = couleur;
    System.out.println("Une voiture est construite avec son nombre de porte.");
  }

  static void Klaxonner() {
    System.out.println("Tutut!!!");
  }

  static void tourner(String droiteOuGauche, int angle) {
    System.out.println("la tourner va tourner à " + droiteOuGauche + " avec un angle de " + angle + " degrés");
  }

  int passerRapport(boolean augmenter) {
    if (augmenter) {
      this.rapportCourant++;
    } else {
      this.rapportCourant--;
    }
    return this.rapportCourant;
  }


  void tourner(boolean droite, int angle) {
    String droiteOuGauche = null;
    if (droite) {
      droiteOuGauche = "droite";
    } else {
      droiteOuGauche = "gauche";
    }
    System.out.println("les " + nbRoues + " roues de la voiture tournent à " + droiteOuGauche + " avec un angle de " + angle + " degrés");
  }

  City transporter(Passenger passenger, City cityDeparture) {
    System.out.println("la voiture transporte un passager qui s'appelle " + passenger.name + " " + passenger.lastName);
    System.out.println("Le passager est parti de la ville de " + cityDeparture.name);

    City cityDestination = new City();
    cityDestination.name = "Wellington";
    return cityDestination;
  }
}
