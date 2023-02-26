import java.util.*;

public class PrimeChecker {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        for(int i = 0; i < 2; i++) {
            int input = sc.nextInt();
            Boolean flag = true;
            for(int j = 2; j < input; j++) {
                if(j < input && input%j==0) {
                    break;
                } else {
                    System.out.println("cool" + j);
                }
            }
        }

        sc.close();
    }
}