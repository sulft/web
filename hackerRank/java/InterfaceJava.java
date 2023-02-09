// link exercice
// https://www.hackerrank.com/challenges/java-interface/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

import java.util.*;
import java.lang.*;

public class InterfaceJava {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int number = sc.nextInt();

        MyCalculator calculator = new MyCalculator();
        System.out.println("I implemented: " + calculator.getClass().getInterfaces()[0].getName());
        System.out.println(calculator.divisor_sum(number));
    } 
}

class MyCalculator implements AdvancedArithmetic {
    public int divisor_sum(int n) {
        int total = 0;
        for(int i = 1;i <= n; i++) {
            if (n%i==0) total += i;
        }
        return total;
    }
}

interface AdvancedArithmetic {
    int divisor_sum(int n);
}