package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Passenger;
import com.examly.springapp.repository.PassengerRepo;

@Service
public class PassengerService {

	@Autowired
	private PassengerRepo repo;
	
	public List<Passenger> fetchPassengerList(){
		return repo.findAll();
	}
	
	public List<Passenger> fetchPassengerListByUserId(int id){
		return repo.findAllById(id);
	}
	
	public List<Passenger> fetchPassengerListByVehicleId(int id){
		return repo.findAllById(id);
	}
	
	public Passenger savePassenger(Passenger passenger) {
		return repo.save(passenger);		
	}
	
	public Passenger savePassenger1(Passenger passenger) {
		return repo.save(passenger);
	}
	
	public Optional<Passenger> fetchPassengerById(int id)
	{
		return repo.findById(id);
	}
	
	public Optional<Passenger> fetchPassengerByVehicleId(int id)
	{
		return repo.findById(id);
	}
	
	public Optional<Passenger> fetchPassengerByUserId(int id)
	{
		return repo.findById(id);
	}
	
	public String deletePassengerById(int id)
	{
		String result;
		try
		{
			repo.deleteById(id);
			result="Passenger successfully Deleted";
		}
		catch(Exception e)
		{
			result="Passenger not deleted";
		}
		return result;
	}

	public List<Passenger> findByUserreferenceId(int id) {
		return repo.findByUserreferenceId(id);
	}

	
}
