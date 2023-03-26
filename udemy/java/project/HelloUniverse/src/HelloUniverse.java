public class HelloUniverse {
  public static void main(String... args) {
    int nbPlanetes;
    int annee;

    annee = 2005;

    nbPlanetes = annee < 2014 ? 9 : 8;
    System.out.printf("En %d, les planètes du système solaire étaient au nombre de : %d",annee, nbPlanetes);
  }
}
