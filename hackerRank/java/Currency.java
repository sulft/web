// link exercice
// https://www.hackerrank.com/challenges/java-currency-formatter/problem?isFullScreen=true

import java.util.*;
import java.text.NumberFormat;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;




public class Currency {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double payment = sc.nextDouble();


        NumberFormat u = NumberFormat.getCurrencyInstance(Locale.US);
        NumberFormat c = NumberFormat.getCurrencyInstance(Locale.CHINA);
        NumberFormat i = NumberFormat.getCurrencyInstance();
        DecimalFormatSymbols dfs = new DecimalFormatSymbols();
        dfs.setCurrencySymbol("Rs.");
        dfs.setGroupingSeparator(',');
        dfs.setMonetaryDecimalSeparator('.');
        ((DecimalFormat) i).setDecimalFormatSymbols(dfs);
        NumberFormat f = NumberFormat.getCurrencyInstance(Locale.FRANCE); 
       

        System.out.println("US: " + u.format(payment));
        System.out.println("India: " + i.format(payment));
        System.out.println("China: " + c.format(payment));
        System.out.println("France: " + f.format(payment));
    }
}