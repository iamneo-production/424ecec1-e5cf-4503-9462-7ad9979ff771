package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Vehicle;

public interface CrudRepo extends JpaRepository<Vehicle,Integer> {

}
