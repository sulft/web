class Tableau {
    public static void main(String[] args) {
        int[] tab; //déclaration du tableau
        tab = new int [3]; //allocation de la mémoire
        //initialisation des éléments
        tab[0] = 1;
        tab[1] = 2;
        tab[2] = 3;

        System.out.println("Element à l'index 0: "+tab[0]);
        System.out.println("Element à l'index 1: "+tab[1]);
        System.out.println("Element à l'index 2: "+tab[2]);

        //déclaration, initialisation et accès
        String[] prenoms = {"John","Denis","Jean","Pierre"};
        System.out.println(prenoms[1] + "\n");

        //déclaration, initialisation et accès d'un tableau a 2 dimensions
        String[][] couple = {{"John","Denis","Jean"},{"Anne","Marie","Jane"}};
        System.out.println(couple[0][1] + " est avec " + couple[1][2] + "\n");

        /* Copie des éléments du tableau */
        String[] prenomsCopie = new String[4];
        System.arraycopy(prenoms,1,prenomsCopie,0,3);

        String[] prenomsCopie2 = java.util.Arrays.copyOfRange(prenoms, 0, 4);


        for(String prenom : prenomsCopie2) {
            System.out.println("prenom : " + prenom);
        }



    }
}