public class HelloWorld {
    public static void main(String[] args) {
      boolean jeContinue = true;
      int nb = 1;
      while (jeContinue) {
        System.out.println("Hello World!");
        nb++;
        if (nb == 5) {
          continue;
        } // ce qui est après le if est ignoré
        System.out.print("nb ne vaut pas 5");

        if (nb == 10) {
          break;
        }
      }

    }
}
