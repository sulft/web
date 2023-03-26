public class HelloWorld {
    public static void main(String[] args) {
      int age = 24;
      System.out.printf("Mon age est %d ans ",age);

      if(age >= 30){
        System.out.print("et je fais plus jeune.\n");
      } else if(age < 10){
        System.out.print("bravo à toi de commencer si jeune.\n");
      } else if(age == 25){
        System.out.print("et je suis en pleine forme.\n");
      } else {
        System.out.println("et je suis fière de mon âge.");
      }

    }
}
