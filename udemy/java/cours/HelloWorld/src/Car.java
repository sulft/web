public class Car {
   byte nbDoor;
   boolean automatic;
   String color;
   int rapportCourant;
   void Klaxonner() {
     System.out.println("Tutut!!!");
   }
   int Accélérer() {
     System.out.println("J'accélère");
     return 100;
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
}
