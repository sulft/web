// link exercice
// https://www.hackerrank.com/challenges/java-factory/problem?isFullScreen=true

import java.util.*;

public class Factory {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        FoodFactory f = new FoodFactory();

        Food f1 = f.getFood(sc.nextLine());

        System.out.println("The factory returned " + f1.getClass());
        System.out.println(f1.getType());
    }
}

interface Food {
    public String getType();
}

class Pizza implements Food {
    public String getType() {
        return "Someone ordered a Fast Food!";
    }
}

class Cake implements Food {
    public String getType() {
        return "Someone ordered a Dessert!";
    }
}

class FoodFactory {
    public Food getFood(String in) {
        if(in.equalsIgnoreCase("cake")) {
            return new Cake();
        } else if(in.equalsIgnoreCase("pizza")) {
            return new Pizza();
        } else {
            return null;
        }
    }
}