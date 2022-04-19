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

import com.examly.springapp.model.Review;
import com.examly.springapp.service.ReviewService;

@RestController
public class ReviewController {

	@Autowired
	private ReviewService service;
	
	@GetMapping("/getreviewlist")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Review> fetchReviewList(){
		List<Review> reviews=new ArrayList<Review>();
		reviews=service.fetchReviewList();
		return reviews;
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/addreview")
	public Review saveReview(@RequestBody Review review){
		return service.saveReview(review);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/getreview/{id}")
	public Review fetchReviewById(@PathVariable int id){
		return service.fetchReviewById(id).get();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@DeleteMapping("/deletereview/{id}")
	public String deleteReviewById(@PathVariable int id){
		return service.deleteReviewById(id);
	}
	

}
