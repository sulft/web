// link exercice
// https://www.hackerrank.com/challenges/java-primality-test/problem?isFullScreen=true

import java.util.*;
import java.util.regex.*;
import java.math.BigInteger;


public class Primality{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String text = sc.nextLine();

        Pattern p = Pattern.compile("(\\d{0,100})");
        Matcher m = p.matcher(text);
        Boolean b = m.matches();

        if(m.find()) {
            BigInteger num = new BigInteger(text);
            System.out.println(num.isProbablePrime(1) ? "prime": "not prime");
        }
    }
}