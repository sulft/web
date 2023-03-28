public class HelloUniverse {
  public static void main(String... args) {
    Planet planet = new Planet();

    planet.kilometers = 142984;
    planet.name = "Jupiter";
    planet.material = "Gazeuse";

    Planet newPlanet = new Planet();

    System.out.printf("%s est une planète %s avec un diamètre de %d kilomètres.",newPlanet.name, newPlanet.material,newPlanet.kilometers);
  }
}
