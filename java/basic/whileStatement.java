class WhileStatement {
    public static void main(String[] args) {
        System.out.println();
        int count = 1;
        int count2 = 1;

        System.out.println("Compteur 1 : ");
        while(count < 11) {
            System.out.println("Count is " + count);
            count++;
        } 

        System.out.println();
        System.out.println("Compteur 2 : ");
        
        do {
            System.out.println("Count is " + count2);
            count2++;
        }while(count2 < 11);

    }
}