class BreakDemo {
    public static void main(String[] args) {
        int[] a = {1,2,3,4,5,6,7,8,9};

        for(int nombre : a) {
            if(nombre == 5) {
                break;
            } else {
                System.out.println(nombre);
            }
        }
    }
}