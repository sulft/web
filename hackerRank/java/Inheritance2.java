// link exercice
// https://www.hackerrank.com/challenges/java-inheritance-2/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

import java.lang.*;

public class Inheritance2 {
    public static void main(String[] args) {
        Adder a = new Adder();
        String superClassName;
        superClassName = a.getClass().getSuperclass().getName();
        System.out.println("My superclass is " + superClassName);
        System.out.println(a.add(10,32) + " " +a.add(9,4) + " " + a.add(10,10));
    }
}

class Arithmetic {
    int add(int num1, int num2) {
        return num1+num2;
    }
}

class Adder extends Arithmetic {

}