package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Passenger;

public interface PassengerRepo extends JpaRepository<Passenger,Integer>{

	public List<Passenger> findAllById(int id);
	public List<Passenger> findByUserreferenceId(int id);

}
