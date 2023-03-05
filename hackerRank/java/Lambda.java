import java.util.*;

public class Lambda {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int inputNumber = sc.nextInt();

        for(int i = 0; i < 1; i++) {
            int in = sc.nextInt();
            boolean result;
            switch(in) {
                case 1: //Odd ?
                    (in2) -> {
                        if(in2 % 2 != 0) return true;
                        if(in2 % 2 == 0) return false;
                    };
                    break;

                // case 2: //Prime
                //     (in2) -> {
                //         boolean flag = false;
                //         if (in2 <= 1) {
                //             flag = false;
                //         }
                //         for (int i = 2; i <= Math.sqrt(in2); i++) {
                //             if (in2 % i == 0) {
                //                 flag = false;
                //             }
                //         }
                //         flag = true;

                //         if(flag) {
                //             System.out.println("Prime");
                //         } else {
                //             System.out.println("Composite");
                //         }
                //     };
                //     break;

                // case 3: //Palindrome
                //     (in2) -> {
                //         int inverse = 0;
                //         int temp = in2;
                //         while (temp > 0) {
                //             int digit = temp % 10;
                //             inverse = inverse * 10 + digit;
                //             temp /= 10;
                //         }
                //         if(in2 == inverse) {
                //             System.out.println("Palindrome");
                //         }
                //     };
                //     break;
            }
        }
        sc.close();
    }
}