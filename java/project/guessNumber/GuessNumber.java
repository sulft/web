import java.util.*;

public class GuessNumber{
    public static void main(String args[]) {
        Random rand = new Random();
        Scanner sc = new Scanner(System.in);
        int valeurMax = 50;
        String valeurUtilisateur;
        String nombreADeviner = String.valueOf(rand.nextInt(valeurMax+1));
        int nbEssai = 5;

        System.out.println("le nombre a deviner: " + nombreADeviner);

        while(nbEssai != 0) {
            System.out.println("Pour arrêter de jouer, entrez 'r' ou 'R' !");
            System.out.print("Entrez un nombre compris entre 0 et " + valeurMax + " : ");
            valeurUtilisateur = sc.next();

            System.out.print("\n");


            if(valeurUtilisateur.equals(nombreADeviner)) {
                System.out.print("Bravo");
                break;
            }
            if(valeurUtilisateur.equals("r") || valeurUtilisateur.equals("R")) {
                System.out.print("Vous avez abandonné !");
                break;
            }
            nbEssai--;
        }


        if(nbEssai == 0) {
            System.out.println("Vous avez perdu..");
        }

        sc.close();
    }
}