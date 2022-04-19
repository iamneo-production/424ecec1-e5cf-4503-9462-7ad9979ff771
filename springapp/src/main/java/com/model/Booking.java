package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {
	
	private int userreferenceId;
	private int vehiclereferenceId;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String fullName;
	private String bookingDate;
	private int cost;	
	
	public Booking() {}
	
	public Booking(int userreferenceId, int vehiclereferenceId, int id, String fullName, String bookingDate,
			int cost) {
		super();
		this.userreferenceId = userreferenceId;
		this.vehiclereferenceId = vehiclereferenceId;
		this.id = id;
		this.fullName = fullName;
		this.bookingDate = bookingDate;
		this.cost = cost;
	}
	public int getUserreferenceId() {
		return userreferenceId;
	}
	public void setUserreferenceId(int userreferenceId) {
		this.userreferenceId = userreferenceId;
	}
	public int getVehiclereferenceId() {
		return vehiclereferenceId;
	}
	public void setVehiclereferenceId(int vehiclereferenceId) {
		this.vehiclereferenceId = vehiclereferenceId;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	
	
	

}
