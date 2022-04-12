package com.examly.springapp.model;

import java.math.BigInteger;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Vehicle {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private String date;
	private String source;
	private String destination;
	private String sour_dest;
	private String time;
	private String imageUrl;
	private BigInteger price;
	private int capacity;
	private String desc;
	
	
		
	public Vehicle() {
		
	}



	public Vehicle(int id, String name, String date, String source, String destination, String sour_dest, String time,
			String imageUrl, BigInteger price, int capacity, String desc) {
		super();
		this.id = id;
		this.name = name;
		this.date = date;
		this.source = source;
		this.destination = destination;
		this.sour_dest = sour_dest;
		this.time = time;
		this.imageUrl = imageUrl;
		this.price = price;
		this.capacity = capacity;
		this.desc = desc;
	}
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getSour_dest() {
		return sour_dest;
	}
	public void setSour_dest(String sour_dest) {
		this.sour_dest = sour_dest;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public BigInteger getPrice() {
		return price;
	}
	public void setPrice(BigInteger price) {
		this.price = price;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	
	
	
	

}
