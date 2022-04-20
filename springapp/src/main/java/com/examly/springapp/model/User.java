package com.examly.springapp.model;

import java.math.BigInteger;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
		
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int id;
		private String userName;
		private BigInteger mobile;
		private String email;		
		private String password;
		
		
		
		public User() {

		}


		public User(int id, String userName, BigInteger mobile, String email, String password) {
			super();
			this.id = id;
			this.userName = userName;
			this.mobile = mobile;
			this.email = email;			
			this.password = password;
		}
		
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public BigInteger getMobile() {
			return mobile;
		}
		public void setMobile(BigInteger mobile) {
			this.mobile = mobile;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}		
		
		
		
		
}

