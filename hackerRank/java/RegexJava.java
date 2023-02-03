// link exercice
// https://www.hackerrank.com/challenges/java-regex/problem?isFullScreen=true

import java.util.*;
import java.util.regex.*;  


public class RegexJava {
    public static void main(String[] args) {
        MyRegex a = new MyRegex();
        Scanner sc = new Scanner(System.in);

        while(sc.hasNext()) {
            System.out.println(Pattern.matches(a.p.toString(),sc.next()));
        }
        
    }
}

class MyRegex {
    String regex = "^(?:25[0-5]|2[0-4]\\d|[0-1]?\\d{1,2})(?:\\.(?:25[0-5]|2[0-4]\\d|[0-1]?\\d{1,2})){3}$";
    Pattern p = Pattern.compile(regex);
}