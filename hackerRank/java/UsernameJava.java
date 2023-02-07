import java.util.*;
import java.util.regex.*;

public class UsernameJava {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String regex = "[a-zA-Z]{1}\\w{7,29}";
        Pattern p = Pattern.compile(regex);


        int n = sc.nextInt();

        sc.nextLine();
        if(n > 0 && n < 101) {
            while(n-->0) {
                String text = sc.nextLine();

                Matcher m = p.matcher(text);
                Boolean b = m.matches();

                if(b) {
                    System.out.println("Valid");
                } else {
                    System.out.println("Invalid");
                }
            }
        }
    }
}