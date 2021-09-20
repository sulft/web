/*
Java's System.out.printf function can be used to print formatted output. The purpose of this exercise is to test your understanding of formatting output using printf.

To get you started, a portion of the solution is provided for you in the editor; you must format and print the input to complete the solution.

Input Format

Every line of input will contain a String followed by an integer.
Each String will have a maximum of  alphabetic characters, and each integer will be in the inclusive range from  to .

Output Format

In each line of output there should be two columns:
The first column contains the String and is left justified using exactly  characters.
The second column contains the integer, expressed in exactly  digits; if the original input has less than three digits, you must pad your output's leading digits with zeroes.

problem source: https://www.hackerrank.com/challenges/java-output-formatting/problem
*/

import java.util.*;
import java.lang.Object;



class Exo3 {
    

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String nombre="";
        String langage = "";
        String[] nAsk = new String[3]; //nombre de fois que l'on demande à l'utilisateur d'entrer une valeur

        for(int i = 0; i < nAsk.length; i++) {
            nAsk[i] = scan.nextLine();
        }

        System.out.println("================================");

        for(int i = 0; i < nAsk.length; i++) {
            String mot = nAsk[i];
            for(int j = 0; j < mot.length(); j++ ) { 
                if(Character.isLetter(mot.charAt(j))) {
                    langage += mot.charAt(j);
                } 
            }

            System.out.print(langage); 

            System.out.printf("%"+(langage.length()-15)+"s","");

            for(int j = 0; j < mot.length(); j++ ) { 
                if(Character.isDigit(mot.charAt(j))) {
                    nombre += mot.charAt(j);
                }
            }
            System.out.printf("%s",String.format("%03d", Integer.parseInt(nombre))); 
            nombre="";
            langage="";
            System.out.print("\n");
        }
        scan.close();
        System.out.println("================================");
    }
}