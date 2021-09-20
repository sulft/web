import java.util.*;

/*
In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes. An if-else statement has the following logical flow:

Wikipedia if-else flow chart

Source: Wikipedia

Task
Given an integer, , perform the following conditional actions:

If  is odd, print Weird
If  is even and in the inclusive range of  to , print Not Weird
If  is even and in the inclusive range of  to , print Weird
If  is even and greater than , print Not Weird
Complete the stub code provided in your editor to print whether or not  is weird.

Input Format

A single line containing a positive integer, .

Constraints

Output Format

Print Weird if the number is weird; otherwise, print Not Weird.

problem source :https://www.hackerrank.com/challenges/java-if-else/problem
*/
class Exo1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = scan.nextInt();
        String wrong = "Weird";
        String ok = "Not Weird";

        if(n%2==0) {
            if(n>=2 && n<=5) {
                System.out.println(ok);
            } else if(n>=6 && n<=20) {
                System.out.println(wrong);
            } else {
                System.out.println(ok);
            }
        } else {
            System.out.println(wrong);
        }

        scan.close();
    }
}