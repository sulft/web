public class HelloUniverse {
  public static void main(String... args) {
    Planet planet = new Planet();

    planet.kilometers = 142984;
    planet.name = "Jupiter";
    planet.material = "Gazeuse";

    System.out.printf("%s est une planète %s avec un diamètre de %d kilomètres.",planet.name, planet.material,planet.kilometers);
  }
}
