import java.util.*;

public class Datatypes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Number n = sc.nextLong();
        boolean longTag = false;
        boolean intTag = false;
        boolean shortTag = false;
        boolean byteTag = false;

        long intData = 5;  

        if((int)n >= -9223372036854775808L && (int)n <= 9223372036854775807L) {
            longTag = true;
        }
        if((int)n >= -2147483648 && (int)n <= 2147483647) {
            intTag = true;
        }
        if((int)n >= -32768 && (int)n <= 32767) {
            shortTag = true;
        }
        if((int)n >= -128 && (int)n <= 127) {
            byteTag = true;
        }

        if(longTag == false && intTag == false && shortTag == false && byteTag == false) {
            System.out.println(n + " can't be fitted anywhere.");
        } else {
            System.out.println(n + " can be fitted in:");
            if(byteTag) System.out.println("* byte");
            if(shortTag) System.out.println("* short");
            if(intTag) System.out.println("* int");
            if(longTag) System.out.println("* long");
        }
    }
}