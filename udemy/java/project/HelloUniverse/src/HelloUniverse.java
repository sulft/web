public class HelloUniverse {
  public static void main(String... args) {

    Planet mercure = new Planet();
    mercure.name = "Mercure";
    mercure.kilometers = 4880;
    mercure.material = "Tellurique";
    Planet venus = new Planet();
    venus.name = "Venus";
    venus.kilometers = 12100;
    venus.material = "Tellurique";
    Planet terre = new Planet();
    terre.name = "Terre";
    terre.kilometers = 12756;
    terre.material = "Tellurique";
    Planet mars = new Planet();
    mars.name = "Mars";
    mars.kilometers = 6792;
    mars.material = "Tellurique";
    Planet jupiter = new Planet();
    jupiter.name = "Jupiter";
    jupiter.kilometers = 142984;
    jupiter.material = "Gazeuse";
    Planet saturne = new Planet();
    saturne.name = "Saturne";
    saturne.kilometers = 120536;
    saturne.material = "Gazeuse";
    Planet uranus = new Planet();
    uranus.name = "Uranus";
    uranus.kilometers = 51118;
    uranus.material = "Gazeuse";
    Planet neptune = new Planet();
    neptune.name = "Neptune";
    neptune.kilometers = 49532;
    neptune.material = "Gazeuse";

    mars.welcomeSpaceship(8);
    mars.welcomeSpaceship("FREGATE");

    System.out.printf("Le nombre d'humains ayant déjà séjourné sur Mars est actuellement de %d.", mars.totalVisitors);


  }
}
