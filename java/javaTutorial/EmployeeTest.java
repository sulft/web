import java.io.*;

public class EmployeeTest {
    public static void main(String []args) {
        Employee a = new Employee("Terry");
        a.empAge(12);
        a.empDesignation("CHEF");
        a.empSalary(25000);
        a.printEmployee();
    }
}