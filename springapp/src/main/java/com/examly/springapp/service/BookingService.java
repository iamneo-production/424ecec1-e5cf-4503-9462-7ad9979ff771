package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Booking;
import com.examly.springapp.repository.BookingRepo;

@Service
public class BookingService {

	@Autowired
	private BookingRepo repo;
	
	public List<Booking> fetchBookingList(){
		return repo.findAll();
	}
	
	public List<Booking> fetchBookingListByUserId(int id){
		return repo.findAllById(id);
	}
	
	public List<Booking> fetchBookingListByVehicleId(int id){
		return repo.findAllById(id);
	}
	
	public Booking saveBooking(Booking booking) {
		return repo.save(booking);		
	}
	
	public Optional<Booking> fetchBookingByUserId(int id)
	{
		return repo.findById(id);
	}
	
	public Optional<Booking> fetchBookingByVehicleId(int id)
	{
		return repo.findById(id);
	}
	
	public String deleteBookingById(int id)
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
	
	public List<Booking> findByUserreferenceId(int id) {
		return repo.findByUserreferenceId(id);
	}
	
	public List<Booking> findByVehiclereferenceId(int id) {
		return repo.findByVehiclereferenceId(id);
	}
}
