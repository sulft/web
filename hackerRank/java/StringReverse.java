// link exercice
// https://www.hackerrank.com/challenges/java-string-reverse/problem?isFullScreen=true
import java.util.*;

public class StringReverse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String a = sc.nextLine();
        String b = "";

        for(int i = 0; i < a.length(); i++) {
            b += a.charAt(a.length()-1-i);
        }

        if(a.equals(b)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        
        sc.close();
    }
}