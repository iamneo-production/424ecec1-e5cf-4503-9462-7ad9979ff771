package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Booking;

public interface BookingRepo extends JpaRepository<Booking,Integer> {

	public List<Booking> findAllById(int id);
	public List<Booking> findByUserreferenceId(int id);
	public List<Booking> findByVehiclereferenceId(int id);
}
