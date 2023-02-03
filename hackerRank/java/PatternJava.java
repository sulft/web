// link exercice
// https://www.hackerrank.com/challenges/pattern-syntax-checker/problem?h_r=next-challenge&h_v=zen

import java.util.*;
import java.util.regex.Pattern;


public class PatternJava {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // System.out.println(Pattern.compile("[AZ[a-z](a-z)"));

        int n = sc.nextInt();
        String test = "";

        sc.nextLine();
        
        for(int i = 0; i < n; i++) {
            test = sc.nextLine();
            try {
                Pattern p = Pattern.compile(test);
                System.out.println("Valid");
            } catch(Exception e) {
                System.out.println("Invalid");
            }
        }
        sc.close();
    }
}