package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Review;

public interface ReviewRepo extends JpaRepository<Review,Integer> {

	
}
