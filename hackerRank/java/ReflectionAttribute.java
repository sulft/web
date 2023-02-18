// link exercices 
// https://www.hackerrank.com/challenges/java-reflection-attributes/problem?isFullScreen=true

public class ReflectionAttribute {
    public static void main(String[] args) {
        Student a = new Student();

        System.out.println(a.getClass().getDeclaredMethods().length);

        for(int i = 0; i < a.getClass().getDeclaredMethods().length; i++) {
            System.out.println(a.getClass().getDeclaredMethods()[i].getName());
        }
    }
}

class Student{
    private String name;
    private String id;
    private String email;

    public String getName() {
        return name;
    }
    public void setId(String id) {
        this.id = id;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void anothermethod(){  }

}