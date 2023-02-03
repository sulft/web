// link exercice 
// https://www.hackerrank.com/challenges/java-anagrams/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
import java.util.*;

public class AnagramJava {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String a = sc.nextLine();
        String b = sc.nextLine();




        if(a.length() >=1 && a.length() <= 50 && b.length() >=1 && b.length() <= 50) System.out.println(anagram(a,b));

        sc.close();
    }

    public static String anagram(String mot1, String mot2) {
        char[] mot1Arr = mot1.toLowerCase().toCharArray();
        char[] mot2Arr = mot2.toLowerCase().toCharArray();
        Arrays.sort(mot1Arr);
        Arrays.sort(mot2Arr);

        if(Arrays.equals(mot1Arr,mot2Arr)) {
            return "Anagrams";
        }
        return "Not Anagrams";
    }
}