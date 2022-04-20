package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.User;

public interface RegistrationRepository extends JpaRepository<User,Integer> {
	
	public User findByEmail(String email);
	public User findByEmailAndPassword(String email,String password);
	
}
