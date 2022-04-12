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

import com.examly.springapp.model.Vehicle;
import com.examly.springapp.service.CrudService;

@RestController
public class AMRestController {
	
	@Autowired
	private CrudService service;
	
	@GetMapping("/getvehiclelist")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Vehicle> fetchVehicleList(){
		List<Vehicle> vehicles=new ArrayList<Vehicle>();
		vehicles=service.fetchVehicleList();
		return vehicles;
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/addvehicle")
	public Vehicle saveVehicle(@RequestBody Vehicle vehicle){
		return service.saveVehicle(vehicle);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/getvehicle/{id}")
	public Vehicle fetchVehicleById(@PathVariable int id){
		return service.fetchVehicleById(id).get();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@DeleteMapping("/deletevehicle/{id}")
	public String deleteVehicleById(@PathVariable int id){
		return service.deleteVehicleById(id);
	}

}
