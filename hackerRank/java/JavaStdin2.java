// link exercice
// https://www.hackerrank.com/challenges/java-stdin-stdout/problem?isFullScreen=true
import java.util.*;

public class JavaStdin2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int entier = sc.nextInt();
        double doubleNumber = sc.nextDouble();
        sc.nextLine();
        String mot = sc.nextLine();

        sc.close();

        System.out.println("String: " + mot);
        System.out.println("Double: " + doubleNumber);
        System.out.println("Int: " + entier);
    }
}