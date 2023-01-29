// link exercice
// https://www.hackerrank.com/challenges/java-int-to-string/problem?isFullScreen=true

import java.util.*;

public class JavaIntToString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        if(n >= -100 && n <= 100) {
            String s = Integer.toString(n);
            System.out.println("Good job");
        } else {
            System.out.println("Wrong answer");
        }
    }
}