public class HelloUniverse {
  public static void main(String... args) {
    String phraseIntroduction = "En %d, les planètes du système solaire étaient au nombre de : %d";
    int nbPlanetes;
    int annee;

    annee = 1650;

    nbPlanetes = annee < 2014 ? 9 : 8;
    if (annee >= 1600 && annee <= 2020) {
      if (annee < 1700) {
        nbPlanetes = 7;
      } else if (annee < 1800) {
        nbPlanetes = 8;
      } else if (annee <= 2006) {
        nbPlanetes = 9;
      } else {
        nbPlanetes = 8;
      }
      System.out.printf(phraseIntroduction, annee, nbPlanetes);
    } else {
      System.out.println("Notre programme ne peut pas fournir de résultat pour l'année " + annee);
    }
  }
}
