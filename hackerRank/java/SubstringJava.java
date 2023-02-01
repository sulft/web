// link exercices
// https://www.hackerrank.com/challenges/java-substring/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
import java.util.*;

public class SubstringJava {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String s = sc.nextLine();
        int k = sc.nextInt();
        String[] arr = new String[s.length()-k+1];

        // je décortique le mot en fontion de l'intervalle k fourni
        for(int i = 0; i < arr.length; i++) {
            arr[i] = s.substring(i,i+k);
        }
        System.out.println(Arrays.toString(arr));


        // je trie chaque intervalle par ordre alphabétique
        Arrays.sort(arr);

        // j'affiche mon tableau avec l'intervalle qui commence par la plus petite lettre et l'intervalel qui commence par la plus grande lettre
        System.out.println(Arrays.toString(arr));
        System.out.println(arr[0] + "\n" + arr[arr.length-1]);

    }
}