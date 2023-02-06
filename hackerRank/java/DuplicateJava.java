// link exercice 
// https://www.hackerrank.com/challenges/duplicate-word/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

import java.util.*;
import java.util.regex.*;


public class DuplicateJava{
    public static void main(String[] args) {
        String regex = "\\b(\\w+)(?:\\W+\\1\\b)+";
        Pattern p = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
        
        Scanner sc = new Scanner(System.in); 
        int occurence = sc.nextInt();
        sc.nextLine();

        if(occurence > 0 && occurence < 101) {
            while(occurence-- >0) {
                String text = sc.nextLine();
                Matcher m = p.matcher(text);
                while(m.find()) {
                    text = text.replaceAll(m.group(0),m.group(1));
                }
                System.out.println(text);
            }
        }
    
        sc.close();
    }
}