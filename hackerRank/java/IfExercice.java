// link exercice
// https://www.hackerrank.com/challenges/java-if-else/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

import java.util.*;

public class IfExercice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        
        if(n>= 1 && n<= 100) {
            if((n%2) != 0) {
                System.out.println("Weird");
            } else {
                if(n >= 2 && n <=5 ) {
                    System.out.println("Not Weird"); 
                } else if(n >= 6 && n <=20) {
                    System.out.println("Weird"); 
                } else {
                    System.out.println("Not Weird"); 
                }
            }
        } 
    }
}