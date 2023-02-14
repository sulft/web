// link exercice
// https://www.hackerrank.com/challenges/simple-addition-varargs/problem?isFullScreen=true

import java.util.*;

public class SimpleAddition {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] myArr = new int[6];
        Add add = new Add();

        for(int i = 0; i < 6; i++) {
            int a = sc.nextInt();
            myArr[i] = a;
        }

        add.add(myArr);
    }
}

class Add {
    void add(int[] arr) {

        String equality = "";
        int total = 0;
        for(int i = 0; i < arr.length; i++) {
            if(i == 1) {
                equality += arr[0] + "+" + arr[1];
                total = arr[0] + arr[1];
                System.out.println(equality + "=" + total);
            } 
            if(i > 1) {
                if(i > 1 && i != 3) {
                    equality += "+" + arr[i];
                    total += arr[i];
                    System.out.println(equality + "=" + total);
                } else {
                    equality += "+" + arr[i];
                    total += arr[i];
                }
            }
        }
    }
}