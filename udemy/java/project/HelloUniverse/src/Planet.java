public class Planet {
  static String form = "spherical";
  static int discoveredPlanet = 0;
  String name;
  String material;
  long kilometers;
  int totalVisitors = 0;
  Atmosphere atmosphere;
  Spaceship spaceship;

  Planet(String name) {
    this.name = name;
    discoveredPlanet++;
  }

  static String expansion(double distance) {
    if (distance < 14) {
      return "Oh la la mais c'est super rapide !";
    } else {
      return "Je rêve ou c'est plus rapide que la lumière ?";
    }
  }

  int spin(int angle) {
    return angle / 360;
  }

  int revolution(int angle) {
    return angle / 360;
  }

  public Spaceship docking(Spaceship spaceship) {
    if (this.spaceship == null) {
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
