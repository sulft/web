class ForStatement {
    public static void main(String[] args) {
        for(int i=1; i <11; i++) {
            System.out.println(i);
        }

        System.out.print("\n");

        int[] a = {1,2,3,4,5,6,7,8,9,10};

        for(int nombre : a) {
            System.out.println(nombre);
        }
    }
}