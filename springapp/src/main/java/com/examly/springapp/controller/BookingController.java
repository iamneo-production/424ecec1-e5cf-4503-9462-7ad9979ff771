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

import com.examly.springapp.model.Booking;
import com.examly.springapp.service.BookingService;

@RestController
public class BookingController {

	@Autowired
	private BookingService service;
	
	
	@GetMapping("/getbookinglist")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Booking> fetchBookingList(){
		List<Booking> bookings=new ArrayList<Booking>();
		bookings=service.fetchBookingList();
		return bookings;
	}
	
	@GetMapping("/getbookinglistbyuser/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Booking> fetchBookingListByUserId(@PathVariable int id){
		List<Booking> bookings=new ArrayList<Booking>();
		bookings=service.fetchBookingListByUserId(id);
		return bookings;		
	}
	
	@GetMapping("/getbookinglistbyvehicle/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Booking> fetchBookingListByVehicleId(@PathVariable int id){
		List<Booking> bookings=new ArrayList<Booking>();
		bookings=service.fetchBookingListByVehicleId(id);
		return bookings;		
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/addbooking")
	public Booking saveBooking(@RequestBody Booking booking){
		return service.saveBooking(booking);
	}
	
	
	@GetMapping("/getbookingbyuser/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public Booking fetchBookingByUserId(@PathVariable int id){
		return service.fetchBookingByUserId(id).get();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/getbookingbyvehicle/{id}")
	public Booking fetchBookingByVehicleId(@PathVariable int id){
		return service.fetchBookingByVehicleId(id).get();
	}
	
	@DeleteMapping("/deletebooking/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public String deleteBookingById(@PathVariable int id){
		return service.deleteBookingById(id);
	}
	
	@GetMapping("/getbookingbyuserid/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Booking> findByUserreferenceId(@PathVariable int id){
		return service.findByUserreferenceId(id);
	}
	
	@GetMapping("/getbookingbyvehicleid/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Booking> findByVehiclereferenceId(@PathVariable int id){
		return service.findByVehiclereferenceId(id);
	}
}
