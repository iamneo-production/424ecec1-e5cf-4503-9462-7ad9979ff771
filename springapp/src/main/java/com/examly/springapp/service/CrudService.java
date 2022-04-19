package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Vehicle;
import com.examly.springapp.repository.CrudRepo;

@Service
public class CrudService {

	@Autowired
	private CrudRepo repo;
	public List<Vehicle> fetchVehicleList(){
		return repo.findAll();
	}
	
	public Vehicle saveVehicle(Vehicle vehicle)
	{
		return repo.save(vehicle);
	}
	
	public Optional<Vehicle> fetchVehicleById(int id)
	{
		return repo.findById(id);
	}
	
	public String deleteVehicleById(int id)
	{
		String result;
		try
		{
			repo.deleteById(id);
			result="Vehicle successfully Deleted";
		}
		catch(Exception e)
		{
			result="Vehicle not deleted";
		}
		return result;
	}
}
