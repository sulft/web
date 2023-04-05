public class Planet {
  String name;
  String material;
  long kilometers;
  int totalVisitors = 0;
  Atmosphere atmosphere;
  Spaceship spaceship;
  static String form = "spherical";

  int spin(int angle) {
    return angle/360;
  }

  int revolution(int angle) {
    return angle/360;
  }

  public Spaceship docking(Spaceship spaceship) {
    if(this.spaceship == null) {
      System.out.println("Aucun vaisseau ne s'en va");
    } else {
      System.out.println("Un vaisseau de type " + this.spaceship.type + " doit s'en aller");
    }
    this.totalVisitors += spaceship.nbPassenger;

    Spaceship lastSpaceship = this.spaceship;
    this.spaceship = spaceship;

    return lastSpaceship;
  }
}
