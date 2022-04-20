package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.RegistrationRepository;


@Service
public class SignupService {
	
	@Autowired	
	private RegistrationRepository repo;
  
	public User saveUser(User user) 
  {
		 
		return repo.save(user);
	}
	
	public User saveUser1(User user)
	{
		return repo.save(user);
	}
	
	public User fetchUserByEmail(String email) 
  {
		return repo.findByEmail(email);		
	}
	
	public User fetchUserByEmailAndPassword(String email,String password)
  {
		return repo.findByEmailAndPassword(email, password);		
	}
	
	public List<User> fetchUserList()
  {
		return repo.findAll();
	}
	
	public Optional<User> fetchUserById(int id)
	{
		return repo.findById(id);
	}
	
	public String deleteUserById(int id)
	{
		String result;
		try
		{
			repo.deleteById(id);
			result="User successfully Deleted";
		}
		catch(Exception e)
		{
			result="User not deleted";
		}
		return result;
	}

}
