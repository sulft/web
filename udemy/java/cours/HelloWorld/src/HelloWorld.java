public class HelloWorld {
    public static void main(String[] args) {
      String mois;

      mois = "Décembre";

      switch(mois) {
        case "Janvier":
        case "Février":
        case "Mars":
          System.out.print("C'est l'hiver.");
          break;
        case "Avril":
        case "Mai":
        case "Juin":
          System.out.print("C'est le printemps.");
          break;
        case "Juillet":
        case "Aout":
        case "Septembre":
          System.out.print("C'est l'été.");
          break;
        case "Octobre":
        case "Novembre":
        case "Décembre":
          System.out.print("C'est l'automne.");
          break;
        default:
          System.out.println("Ce mois n'existe pas.");
          break;
      }

    }
}
