import java.util.*;
import java.lang.*;


class Exo5 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int q = scan.nextInt();

        for(int j = 0; j < q ; j++) {
            int s = 0;
            int a = scan.nextInt();
            int b = scan.nextInt();
            int n = scan.nextInt();
            for(int i = 0; i < n; i++) {
                if(i == 0) {
                    s = a + (int)Math.pow(2,i)*b;
                } else {
                    s += (int)Math.pow(2,i)*b;
                }
                System.out.print(s + " ");
            }
            System.out.print("\n");
        }
        scan.close();
    }
}