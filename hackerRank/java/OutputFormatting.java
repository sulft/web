// link exerice
// https://www.hackerrank.com/challenges/java-output-formatting/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
import java.util.*;

public class OutputFormatting {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String choix1 = sc.nextLine();
        String choix2 = sc.nextLine();
        String choix3 = sc.nextLine();

        String[] choix1Arr = choix1.split(" ");
        String[] choix2Arr = choix2.split(" ");
        String[] choix3Arr = choix3.split(" ");

        sc.close();

        System.out.println("================================");
        System.out.printf("%-14s %03d %n", choix1Arr[0], Integer.parseInt(choix1Arr[1])); 
        /* 
        %-14s ajoute 14 espace à droite de mon string passer en parametre "choix1Arr[0]"
        %03d ajoute autant de 0 à gauche de mon nombre passer en parametre "choix1Arr[1]" afin d'avoir 3 chiffres dans mon nombre
        %n permet de faire un saut à la ligne
        */
        System.out.printf("%-14s %03d %n", choix2Arr[0], Integer.parseInt(choix2Arr[1]));
        System.out.printf("%-14s %03d %n", choix3Arr[0], Integer.parseInt(choix3Arr[1]));
        System.out.println("================================");
    }
}

           
     