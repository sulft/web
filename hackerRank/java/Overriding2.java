// link exercice
// https://www.hackerrank.com/challenges/java-method-overriding-2-super-keyword/problem?isFullScreen=true

public class Overriding2 {
    public static void main(String[] args) {
        Motorcycle m = new Motorcycle();
    }
}

class Bicycle {
    String define_me() {
        return "a vehicle with pedals.";
    }
}

class Motorcycle extends Bicycle {
    String define_me() {
        return "a cycle with an engine.";
    }

    Motorcycle() {
        System.out.println("Hello I am a motorcycle, I am " + define_me());
        System.out.println("My ancestor is a cycle who is " + super.define_me());
    }
}

