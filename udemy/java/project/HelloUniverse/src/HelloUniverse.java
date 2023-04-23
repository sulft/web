public class HelloUniverse {
  public static void main(String... args) {

    Planet mercure = new Planet("Mercure");
    mercure.kilometers = 4880;
    mercure.material = "Tellurique";
    Planet venus = new Planet("Venus");
    venus.kilometers = 12100;
    venus.material = "Tellurique";
    Planet terre = new Planet("Terre");
    terre.kilometers = 12756;
    terre.material = "Tellurique";
    Planet mars = new Planet("Mars");
    mars.kilometers = 6792;
    mars.material = "Tellurique";
    Planet jupiter = new Planet("Jupiter");
    jupiter.kilometers = 142984;
    jupiter.material = "Gazeuse";
    Planet saturne = new Planet("Saturne");
    saturne.kilometers = 120536;
    saturne.material = "Gazeuse";
    Planet uranus = new Planet("Uranus");
    uranus.kilometers = 51118;
    uranus.material = "Gazeuse";
    uranus.atmosphere = new Atmosphere();
    uranus.atmosphere.hydrogene = 83;
    uranus.atmosphere.helium = 15;
    uranus.atmosphere.methane = 2.5f;
    Planet neptune = new Planet("Neptune");
    neptune.kilometers = 49532;
    neptune.material = "Gazeuse";

    System.out.println(Planet.discoveredPlanet);
  }
}
