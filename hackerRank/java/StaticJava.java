// link exercice 
// https://www.hackerrank.com/challenges/java-static-initializer-block/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

import java.util.*;

public class StaticJava {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int h = sc.nextInt();
        int b = sc.nextInt();
        try {
            if((h >= -100 && h <= 100) && (b >= -100 && b <= 100)) {
                if(h <= 0 || b <= 0) {
                    throw new Exception("java.lang.Exception: Breadth and height must be positive");
                } else {
                    System.out.println(h*b);
                }
            }
        } catch(Exception e) {
            System.out.println(e.getMessage());
        }
        sc.close();

    }
}