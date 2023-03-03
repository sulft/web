// link exercice
// https://www.hackerrank.com/challenges/java-singleton/problem?isFullScreen=true
import java.util.*;

public class SingletonPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Singleton a = Singleton.getInstance(sc.nextLine());
        System.out.println(a.text);
    }
}

class Singleton { 
    private static Singleton s = null;

    public static String str = "";
    public static String text = "Hello I am a singleton! Let me say " + str + " to you";

    private Singleton() {
        this.text = "Hello I am a singleton! Let me say " + this.str + " to you";
    }

    public static Singleton getInstance(String n) {
        str = n;
        if(str.equals("")) {
            str = "hello world";
        }
        s = new Singleton();
        return s;
    }
}