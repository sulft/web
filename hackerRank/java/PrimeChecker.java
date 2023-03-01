// link exercice
// https://www.hackerrank.com/challenges/prime-checker/problem?isFullScreen=true

import java.util.*;

public class PrimeChecker {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int a[] = new int[1];

        for(int i = 0; i < a.length; i++) {
            int input = sc.nextInt();
            a[i] = input;
        }

        for(int l = 0; l < a.length; l++) {
            boolean isPrime = true;

            for (int k = 2; k <= Math.sqrt(a[l]); k++) {
                if (a[l] % k == 0) {
                    isPrime = false;
                    break;
                }
            }
            
            if (isPrime) {
                for (int i = 2; i <= a[l]; i++) {
                    if (!isPrime(i)) {
                        continue;
                    }
                    System.out.printf(i + " ");
                    if(i == a[l]){
                        System.out.println();
                    }
                }

            }

        }

        sc.close();
    }

    public static boolean isPrime(int num) {
        if (num < 2) {
            return false;
        }
      
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}