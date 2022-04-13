package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Review {
	
	@Id
	private int id;
	private int overallExperience;
	private int offer;
	private int timeliness;
	private int customerSupport;
	private int recommend;
	private String comment;
	
	
	public Review() {

	}
	
	public Review(int id, int overallExperience, int offer, int timeliness, int customerSupport, int recommend,
			String comment) {
		super();
		this.id = id;
		this.overallExperience = overallExperience;
		this.offer = offer;
		this.timeliness = timeliness;
		this.customerSupport = customerSupport;
		this.recommend = recommend;
		this.comment = comment;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getOverallExperience() {
		return overallExperience;
	}
	public void setOverallExperience(int overallExperience) {
		this.overallExperience = overallExperience;
	}
	public int getOffer() {
		return offer;
	}
	public void setOffer(int offer) {
		this.offer = offer;
	}
	public int getTimeliness() {
		return timeliness;
	}
	public void setTimeliness(int timeliness) {
		this.timeliness = timeliness;
	}
	public int getCustomerSupport() {
		return customerSupport;
	}
	public void setCustomerSupport(int customerSupport) {
		this.customerSupport = customerSupport;
	}
	public int getRecommend() {
		return recommend;
	}
	public void setRecommend(int recommend) {
		this.recommend = recommend;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	
	

}
