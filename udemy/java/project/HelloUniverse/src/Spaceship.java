public class Spaceship {
    String type;
    int nbPassenger;
    int blindage;
    int resistanceOfShield;

    void activateShield() {
      System.out.println("Activation du bouclier d'un vaisseau de type " + this.type);
    }

    void deactivateShield() {
      System.out.println("Désactivation du bouclier d'un vaisseau de type " + this.type);
    }
}
