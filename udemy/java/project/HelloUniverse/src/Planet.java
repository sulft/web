public class Planet {
  String name;
  String material;
  long kilometers;

  void spin() {
    System.out.println("Je suis la planète " + this.name + " et je tourne autour de mon étoile");
  }

  void revolution() {
    System.out.println("je suis la planète " + this.name + " et je tourne sur moi-même. ");
  }
}
