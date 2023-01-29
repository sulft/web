// link exercice
// https://www.hackerrank.com/challenges/java-date-and-time/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

import java.util.*;
import java.time.LocalDate;

public class DateJava {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int day = sc.nextInt();
        int month = sc.nextInt();
        int year = sc.nextInt();

        if(year < 3000 && year > 2000) {
            LocalDate date = LocalDate.of(year, month, day);
            System.out.println(date.getDayOfWeek());
        }
    }
}