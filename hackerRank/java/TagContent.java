import java.util.regex.*;
import java.util.*;

public class TagContent {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        


        int num = sc.nextInt();
        sc.nextLine();
        int total = 0;


        if(num>0 && num<101) {
            while(num-- > 0) {
                String text = sc.nextLine();
                total += text.length();
                System.out.println(total);
                if(text.length()<10001 && total <1000001) {
                    regex(text);
                }
            }
        }

    }

    public static void regex(String text) {
        String regex = "<([\\w+\s*]+)>[\\w\s]+</(\\1)>";
        Pattern p = Pattern.compile(regex);
        Matcher m = p.matcher(text);
        Boolean b = m.find();

        if(b) {
            text = m.group(0);
            text = text.replaceAll(m.group(1),"");
            text = text.replaceAll("<>","");
            text = text.replaceAll("</>","");

            System.out.println(text);
        } else {
            System.out.println("None");
        }
    }
}