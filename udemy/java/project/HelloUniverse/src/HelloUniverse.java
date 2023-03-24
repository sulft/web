public class HelloUniverse {
  public static void main(String... args) {
    int nbPlanetes;
    String maChaine;

    maChaine = "Aux dernières nouvelles, le nombre total de planètes dans le système solaire est de : ";
    nbPlanetes = 8;
    System.out.println(maChaine + nbPlanetes);

    maChaine = "Il y a quelques années cependant, elles étaient au nombre de : ";
    nbPlanetes++;
    System.out.print(maChaine + nbPlanetes);
  }
}
