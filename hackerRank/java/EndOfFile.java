// link exercice
// https://www.hackerrank.com/challenges/java-end-of-file/problem?isFullScreen=true
import java.util.*;

public class EndOfFile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String a = "";
        int n = 0;
        while(sc.hasNext()) {
            a = sc.nextLine();
            if(a == "") {
                break;
            }
            System.out.println(++n + " " + a);
        }

    }
}