public class Car {
   byte nbDoor;
   int vitesseCourante = 30;
   boolean automatic;
   String color;
   int rapportCourant;
   void Klaxonner() {
     System.out.println("Tutut!!!");
   }
   int accélérer() {
     int vitesse = 100;
     System.out.println("J'accélère à " + vitesse + "km/h");
     return vitesse;
   }

    int accélérer(int vitesseEnPlus) {
      System.out.println("J'accélère à " + (vitesseEnPlus + this.vitesseCourante) + "km/h");
      return vitesseEnPlus + this.vitesseCourante;
    }
   int passerRapport(boolean augmenter) {
      if(augmenter) {
        rapportCourant++;
      } else {
        rapportCourant--;
      }
      return rapportCourant;
   }

   void tourner(String droiteOuGauche, int angle) {
     System.out.println("la tourner va tourner à " + droiteOuGauche + " avec un angle de " + angle + " degrés");
   }

  void tourner(boolean droiteOuGauche, int angle) {
    System.out.println("la tourner va tourner à " + droiteOuGauche + " avec un angle de " + angle + " degrés");
  }
}
