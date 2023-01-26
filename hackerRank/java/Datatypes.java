// link exercice
// https://www.hackerrank.com/challenges/java-datatypes/problem?isFullScreen=true

import java.util.*;
import java.lang.*;

public class Datatypes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int iteration = sc.nextInt();
        String in;

        sc.nextLine();

        for(int i = 0; i < iteration; i++) {
                in = sc.nextLine();
            try {
                Long n = Long.parseLong(in);
            
                boolean longTag = false;
                boolean intTag = false;
                boolean shortTag = false;
                boolean byteTag = false;

                // Si le nombre est dans l'intervalle, le "tag" prends la valeur de true.
                if(n >= -9223372036854775808L && n <= 9223372036854775807L) longTag = true;  
                if(n >= -2147483648 && n <= 2147483647) intTag = true;
                if(n >= -32768 && n <= 32767) shortTag = true;
                if(n >= -128 && n <= 127) byteTag = true;
                
                // Si au moins 1 tag est true on affiche le message ci-dessous
                if(longTag == true || intTag == true || shortTag == true || byteTag == true) {
                    System.out.println(n + " can be fitted in:");
                    // On ajoute le type en affichage pour chaque "tag" qui est vrai
                    if(byteTag) System.out.println("* byte");
                    if(shortTag) System.out.println("* short");
                    if(intTag) System.out.println("* int");
                    if(longTag) System.out.println("* long");
                }

            } catch(NumberFormatException e) {
                // On rentre dans l'exception quand le nombre est beaucoup trop grand, ce qui provoque une exception pour lequel, on affiche le message suivant
                System.out.println(in + " can't be fitted anywhere.");
            }
        }   
    }
}