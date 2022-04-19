package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Review;
import com.examly.springapp.repository.ReviewRepo;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepo repo;
	
	public List<Review> fetchReviewList(){
		return repo.findAll();
	}
	
	public Review saveReview(Review review)
	{
		return repo.save(review);
	}
	
	public Optional<Review> fetchReviewById(int id)
	{
		return repo.findById(id);
	}
	
	public String deleteReviewById(int id)
	{
		String result;
		try
		{
			repo.deleteById(id);
			result="Review successfully Deleted";
		}
		catch(Exception e)
		{
			result="Review not deleted";
		}
		return result;
	}	

	
}
