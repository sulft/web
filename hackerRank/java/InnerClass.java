// link exercice
// https://www.hackerrank.com/challenges/can-you-access/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

import java.util.*;

public class InnerClass {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();
        Inner a = new Inner();
        Inner.Private b = a.new Private();
        if(b.powerof2(num)) {
            System.out.println(num + " is power of 2");
            System.out.println("An instance of class: " + b.getClass().getCanonicalName() +" has been created");
        } else {
            System.out.println(num + " is not power of 2");
            System.out.println("An instance of class: " + b.getClass().getCanonicalName() +" has been created");
        }
    }
    static class Inner{
        class Private {
            boolean powerof2(int a) {
            if(a==0) { return false; }
                while(a != 1)
                {
                    a = a/2;
                    if(a%2 != 0 && a != 1){ return false; }
                }
                return true;
            }
        }
    }
}

