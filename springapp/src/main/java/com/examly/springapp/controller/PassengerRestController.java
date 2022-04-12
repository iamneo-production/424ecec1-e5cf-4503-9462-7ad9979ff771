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

import com.examly.springapp.model.Passenger;
import com.examly.springapp.service.PassengerService;

@RestController
public class PassengerRestController {
	
	@Autowired
	private PassengerService service; 	
	
	@GetMapping("/getpassengerlist")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Passenger> fetchPassengerList(){
		List<Passenger> passengers=new ArrayList<Passenger>();
		passengers=service.fetchPassengerList();
		return passengers;		
	}
	
	@GetMapping("/getpassengerlistbyuser/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Passenger> fetchPassengerListByUserId(@PathVariable int id){
		List<Passenger> passengers=new ArrayList<Passenger>();
		passengers=service.fetchPassengerListByUserId(id);
		return passengers;		
	}
	
	@GetMapping("/getpassengerlistbyvehicle")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Passenger> fetchPassengerListByVehicleId(@PathVariable int id){
		List<Passenger> passengers=new ArrayList<Passenger>();
		passengers=service.fetchPassengerListByVehicleId(id);
		return passengers;		
	}
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/addpassenger")
	public Passenger savePassenger(@RequestBody Passenger passenger){
		return service.savePassenger(passenger);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/updatepassenger")
	public Passenger savePassenger1(@RequestBody Passenger passenger){
		return service.savePassenger1(passenger);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/getpassenger/{id}")
	public Passenger fetchPassengerById(@PathVariable int id){
		return service.fetchPassengerById(id).get();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/getpassengerbyvehicle/{id}")
	public Passenger fetchPassengerByVehicleId(@PathVariable int id){
		return service.fetchPassengerByVehicleId(id).get();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/getpassengerbyuser/{id}")
	public Passenger fetchPassengerByUserId(@PathVariable int id){
		return service.fetchPassengerByUserId(id).get();
	}
	
	
	@DeleteMapping("/deletepassenger/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public String deletePassengerById(@PathVariable int id){
		return service.deletePassengerById(id);
	}
	
	
	@GetMapping("/getpassengerbyuserid/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Passenger> findByUserreferenceId(@PathVariable int id){
		return service.findByUserreferenceId(id);
	}
	
}
