/* 
Objective
In this challenge, we're going to use loops to help us do some simple math.

Task
Given an integer, , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: N x i = result.

Input Format

A single integer, .

Constraints

Output Format

Print  lines of output; each line  (where ) contains the  of  in the form:
N x i = result.

Sample Input
source problem : https://www.hackerrank.com/challenges/java-loops-i/problem
*/

import java.util.*;
class Exo4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = scan.nextInt();

        if(n>= 2 && n <=20) {
            for(int i = 1; i <= 10; i++) {
                System.out.println(n + " x " + i + " = " + n*i);
            }
        }

        scan.close();
    }
}