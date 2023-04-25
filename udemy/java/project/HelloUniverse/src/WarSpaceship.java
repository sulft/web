public class WarSpaceship extends Spaceship {
  void attack(Spaceship opponent, String weapon, int attackDuration) {
    System.out.println("Un vaisseau de type " + this.type + " attaque un vaisseau de type " + opponent.type + " en utilisant l'arme " + weapon + " pendant " + attackDuration + " duration");

  }
}
