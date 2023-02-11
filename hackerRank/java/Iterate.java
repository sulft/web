// link exercice
// https://www.hackerrank.com/challenges/java-iterator/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

import java.util.*;
import java.lang.*;


public class Iterate {
    public static void main(String[] args) {
        ArrayList list = new ArrayList();

        Scanner sc = new Scanner(System.in);

        String num1 = sc.nextLine();
        String[] numArr = num1.split(" ");


        for(int i = 0; i < Integer.parseInt(numArr[0]); i++) {
            int in1 = Integer.parseInt(sc.nextLine());
            list.add(in1);
        }

        list.add("###");

        for(int j = 0; j < Integer.parseInt(numArr[1]); j++) {
            String in2 = sc.nextLine();
            list.add(in2);
        }

        func(list);
    }

    static void func(ArrayList n) {
        Iterator it = n.iterator();
        while(it.hasNext()) {
            Object element = it.next();
            if(element instanceof String) { 
                if(element != "###") {
                    System.out.println(element);
                }
            }
        }
    }
}