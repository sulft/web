public class Planet {
  String name;
  String material;
  long kilometers;
  int totalVisitors = 0;

  int spin(int angle) {
    return angle/360;
  }

  int revolution(int angle) {
    return angle/360;
  }

  void welcomeSpaceship(int newVisitors) {
    this.totalVisitors += newVisitors;
  }

  void welcomeSpaceship(String str) {
    if(str.equals("CHASSEUR")) {
      this.totalVisitors += 3;
    } else if(str.equals("FREGATE")) {
      this.totalVisitors += 12;
    } else if(str.equals("CROISEUR")) {
      this.totalVisitors += 50;
    }
  }
}
