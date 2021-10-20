import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        short a = sc.nextShort();

        for(var i = a; i >= 0; i--) {
            System.out.print(i + " ");
        } 
    }
}