public class HelloWorld {
    public static void main(String[] args) {
      Car carOfTerry = new Car();
      carOfTerry.automatic = true;
      carOfTerry.color = "rouge";
      carOfTerry.nbDoor = 5;

      System.out.println("La voiture est " + carOfTerry.color + " et dispose de " + carOfTerry.nbDoor + " portes.");
    }
}
