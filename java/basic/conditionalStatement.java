class ConditionalStatement {
    public static void main(String[] args) {
        int testGrade = 95;
        char grade;

        if(testGrade >= 90) {
            grade = 'A';
        } else if (testGrade >= 80) {
            grade = 'B';
        } else if (testGrade >= 70) {
            grade = 'C';
        } else if (testGrade >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        System.out.print("Grade = " + grade);
    }
}