public class Car {
   byte nbDoor;
   int vitesse = 30;
   boolean automatic;
   String color;
   int rapportCourant;
   void Klaxonner() {
     System.out.println("Tutut!!!");
   }
   int accélérer() {
     int vitesseVoiture = 100;
     System.out.println("J'accélère à " + vitesseVoiture + "km/h");
     return vitesseVoiture;
   }

    int accélérer(int vitesse) {
      System.out.println("J'accélère à " + (vitesse + this.vitesse) + "km/h");
      return vitesse + this.vitesse;
    }
   int passerRapport(boolean augmenter) {
      if(augmenter) {
        this.rapportCourant++;
      } else {
        this.rapportCourant--;
      }
      return this.rapportCourant;
   }

   void tourner(String droiteOuGauche, int angle) {
     System.out.println("la tourner va tourner à " + droiteOuGauche + " avec un angle de " + angle + " degrés");
   }

  void tourner(boolean droiteOuGauche, int angle) {
    System.out.println("la tourner va tourner à " + droiteOuGauche + " avec un angle de " + angle + " degrés");
  }
}
