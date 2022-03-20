package com.example.demo.student;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

//Ici on fait la logique de notre API 

@Service
public class StudentService {
	public List<Student> getStudents() {
		return List.of(new Student(1L,"Maryem","Mariem@gmail.com", 21, LocalDate.of(2000, 6, 12)));
	}
}
