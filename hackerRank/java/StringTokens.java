// link exercice
// https://www.hackerrank.com/challenges/java-string-tokens/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
import java.util.*;

public class StringTokens {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String s = sc.nextLine();

        if(s.isBlank()) {
          System.out.println(0);
        }
        else { 
            if(s.length()>=1 && s.length()<=400000) {
                String[] sArr = s.trim().split("[ !,?._'@]++");
                System.out.println(sArr.length);

                for(int i = 0; i < sArr.length; i++) {
                    System.out.println(sArr[i]);
                }
            } 
        }
    }
} 