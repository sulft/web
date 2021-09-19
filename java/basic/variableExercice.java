class VariableExercice {
    public static void main(String[] args) {
        //1. Create a small program that defines some fields. Try creating some illegal field names and see what kind of error the compiler produces. Use the naming rules and conventions as a guide.
 
        //error: as of release 9, '_' is a keyword, and may not be used as an identifier =>  float _ = 3.2f;
        //Serror: illegal start of expression => String ^ = "Test";
        //boolean boolean = true;

        boolean vrai;
        String mot;
        float flottant;


        //2. In the program you created in Exercise 1, try leaving the fields uninitialized and print out their values. Try the same with a local variable and see what kind of compiler errors you can produce. Becoming familiar with common compiler errors will make it easier to recognize bugs in your code.

        System.out.println(vrai);
        System.out.println(mot);
        System.out.println(flottant);
    }
}