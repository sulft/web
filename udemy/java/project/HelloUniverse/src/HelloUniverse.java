public class HelloUniverse {
  public static void main(String... args) {
    int nbPlanetes;
    int annee;

    annee = 2014;

    if (annee < 2006) {
      nbPlanetes = 9;
    } else {
      nbPlanetes = 8;
    }
    System.out.printf("En %d, les planètes du système solaire étaient au nombre de : %d",annee, nbPlanetes);
  }
}
