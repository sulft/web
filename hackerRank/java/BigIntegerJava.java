// link exercice
// https://www.hackerrank.com/challenges/java-biginteger/problem?isFullScreen=true

import java.util.*;
import java.math.BigInteger;


public class BigIntegerJava {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String a = sc.nextLine();
        String b = sc.nextLine();

        if(a.length()<200 && !a.contains("-")) {
            if(b.length()<200 && !a.contains("-")) {
                BigInteger num1 = new BigInteger(a,10);
                BigInteger num2 = new BigInteger(b,10);

                BigInteger total = num1.add(num2);
                System.out.println(total);

                total = num1.multiply(num2);
                System.out.println(total);
            }
        }
    }
}