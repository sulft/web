import java.util.regex.*;
import java.util.*;

public class TagContent {
    public static void main(String[] args) {
        
        String test = "<test>tesefet tegfz rfzf</test>";
        String regex = "<(\\w+)>[\\w\s]+</(\\w+)>";
        Pattern p = Pattern.compile(regex);
        Matcher m = p.matcher(test);
        Boolean b = m.find();

        int num = 0;
        if(b) {
                System.out.println(m.group(1));
                System.out.println(m.group(2));

            if(m.group(1) != m.group(2)) {
                System.out.println("None");
            } else {
                test = test.replaceAll(m.group(1),"");
                System.out.println(test);
            } 
        } else {
            System.out.println("no");
        }
    }
}