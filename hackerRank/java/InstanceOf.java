// link exercice
// https://www.hackerrank.com/challenges/java-instanceof-keyword/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

import java.util.*;

public class InstanceOf {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<Object> el = new ArrayList<Object>();

        String number = sc.nextLine();
        
        for(int i = 0; i < Integer.parseInt(number); i++) {
            String obj = sc.nextLine();

            if(obj.equals("Student")) {
                el.add(new Student());
            }
            if(obj.equals("Rockstar")) {
                el.add(new Rockstar());
            }
            if(obj.equals("Hacker")) {
                el.add(new Hacker());
            }
        }
        calculates(el);
        sc.close();
    }

    static void calculates(ArrayList<Object> n) {
        int countStudent = 0;
        int countRockstar = 0;
        int countHacker = 0;
        for(Object i : n) {
            if(i instanceof Student) {
                countStudent++;
            }
            if(i instanceof Rockstar) {
                countRockstar++;
            }
            if(i instanceof Hacker) {
                countHacker++;
            };
        }

        System.out.println(countStudent + " " + countRockstar + " " + countHacker);
    }
}

class Student {}
class Rockstar {}
class Hacker {}