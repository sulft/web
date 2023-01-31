// link exercice
// https://www.hackerrank.com/challenges/java-strings-introduction/problem?isFullScreen=true

import java.util.*;

public class StringIntro {
    public static void main(String[] arg) {
        Scanner sc = new Scanner(System.in);

        String mot1 = sc.nextLine();
        String mot2 = sc.nextLine();

        // afficha la somme de la taille des deux mots
        System.out.println(mot1.length() + mot2.length());

        // Vérifie que la première lettre du mot1 apparait en premier dans l'alphabet par rapport au mot2
        if(mot1.compareToIgnoreCase(mot2) <= 0) {
            System.out.println("No");
        } else {
            System.out.println("Yes");
        }

        // Rends la première lettre du mot en majuscule et les lettres suivantes en minuscule.
        mot1 = mot1.substring(0,1).toUpperCase() + mot1.substring(1).toLowerCase();
        mot2 = mot2.substring(0,1).toUpperCase() + mot2.substring(1).toLowerCase();

        // affiche les deux mots cote à cote avec la première lettre en majuscule
        System.out.println(mot1 + " " + mot2);


        sc.close();
    }
}