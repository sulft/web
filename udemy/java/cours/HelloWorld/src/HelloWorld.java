public class HelloWorld {
    public static void main(String[] args) {
      int age = 31;
      System.out.printf("Voici mon age %d ",age);

      if(age >= 30){
        System.out.print("et je fais plus jeune.\n");
      } else {
        System.out.print("et je suis jeune.\n");
      }

      int ageDuCapitaine = 17;
      System.out.print(ageDuCapitaine > 20 && age < 50 ? "L'age du capitaine est " + ageDuCapitaine : "Le code ne permet pas d'afficher l'age du capitaine pour une raison farfelue");
    }
}
