// link exercice
// https://www.hackerrank.com/challenges/java-abstract-class/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
import java.util.*;

public class AbstractJava {
    public static void main(String[] args) {
        MyBook a = new MyBook();

        Scanner sc = new Scanner(System.in);
        String book = sc.nextLine();
        a.setTitle(book);
        System.out.println("The title is: " + a.getTitle());
        
        sc.close();
    }
}

abstract class Book {
    String title;
    abstract void setTitle(String s);
    String getTitle() {
      return title;
    } 
}

class MyBook extends Book {
    void setTitle(String s) {
        title = s;
    }
}