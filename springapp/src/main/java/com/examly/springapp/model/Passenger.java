package com.examly.springapp.model;

import java.math.BigInteger;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Passenger {
	
	private int userreferenceId;
	private int vehiclereferenceId;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String fullName;
	private int age;
	private Character sex;
	private BigInteger mobile;
	private String passportNumber;
	private String aadharNumber;
	
		
	public Passenger() {
	}


	public Passenger(int userreferenceId, int vehiclereferenceId, int id, String fullName, int age,
			char sex, BigInteger mobile, String passportNumber, String aadharNumber) {
		super();
		this.userreferenceId = userreferenceId;
		this.vehiclereferenceId = vehiclereferenceId;
		this.id = id;
		this.fullName = fullName;
		this.age = age;
		this.sex = sex;
		this.mobile = mobile;
		this.passportNumber = passportNumber;
		this.aadharNumber = aadharNumber;
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
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public char getSex() {
		return sex;
	}
	public void setSex(char sex) {
		this.sex = sex;
	}
	public BigInteger getMobile() {
		return mobile;
	}
	public void setMobile(BigInteger mobile) {
		this.mobile = mobile;
	}
	public String getPassportNumber() {
		return passportNumber;
	}
	public void setPassportNumber(String passportNumber) {
		this.passportNumber = passportNumber;
	}
	public String getAadharNumber() {
		return aadharNumber;
	}
	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}
	
	
	
	
	
	
	

}
