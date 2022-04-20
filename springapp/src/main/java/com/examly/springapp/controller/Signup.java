package com.examly.springapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.User;
import com.examly.springapp.service.SignupService;

@RestController
public class Signup {
	
	@Autowired
	private SignupService service;
	
	@PostMapping("/signup")
	@CrossOrigin(origins="http://localhost:4200")
	public User signup(@RequestBody User user) throws Exception
	{
		String tempEmail =user.getEmail();
		if(tempEmail!=null && "".equals(tempEmail))
		{
			User userobj=service.fetchUserByEmail(tempEmail);
			if(userobj!=null)
			{
				throw new Exception("User with "+tempEmail+" already exists");
			}
				
		}
		User userObj=null;
		userObj=service.saveUser(user);
		return userObj;
	}
	
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public User loginUser(@RequestBody User user) throws Exception
	{
		String tempEmail=user.getEmail();
		String tempPassword=user.getPassword();
		User userObj=null;
		if(tempEmail!=null && tempPassword!=null)
		{
			userObj=service.fetchUserByEmailAndPassword(tempEmail, tempPassword);
		}
		if(userObj==null)
		{
			throw new Exception("Bad Credential");
		}
		return userObj;
	}
	
	
	@GetMapping("/finduser/{email}")
	@CrossOrigin(origins="http://localhost:4200")
	public User fetchUserByEmail(@PathVariable String email){
		return service.fetchUserByEmail(email);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/adduser")
	public User saveUser1(@RequestBody User user){
		return service.saveUser1(user);
	}
	
	@GetMapping("/getuserlist")
	@CrossOrigin(origins="http://localhost:4200")
	public List<User> fetchUserList(){
		List<User> users=new ArrayList<User>();
		users=service.fetchUserList();
		return users;
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/getuser/{id}")
	public User fetchUserById(@PathVariable int id){
		return service.fetchUserById(id).get();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@DeleteMapping("/deleteuser/{id}")
	public String deleteUserById(@PathVariable int id){
		return service.deleteUserById(id);
	}
	
}
