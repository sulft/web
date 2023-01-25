// link exercice
// https://www.hackerrank.com/challenges/java-loops/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

import java.util.*;
import java.lang.Math;

public class Loops2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int q = sc.nextInt();
        
        for(int j = 0; j < q; j ++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int n = sc.nextInt();
            
            int total = a;

            for(int i = 0; i < n; i++) {
                total+=(int)Math.pow(2,i)*b;
                if(i==n-1) {
                    System.out.println(total);
                } else {
                    System.out.print(total + " ");
                } 
            }
        }
        sc.close();
    }
}