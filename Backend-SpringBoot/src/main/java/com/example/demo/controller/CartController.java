package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CartItemRequest;
import com.example.demo.entity.Cart;
import com.example.demo.service.CartService;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "https://localhost:3000")
public class CartController {
	private final CartService cartService ;
	public CartController(CartService cartService) {
		super();
		this.cartService = cartService;
	}
	@PostMapping("/add")
	public ResponseEntity<Cart>addToCart(@RequestBody CartItemRequest cartItem){
			 Cart cart = cartService.addToCart(cartItem.getProductId(),cartItem.getQuantity());
			 return new ResponseEntity<>(cart,HttpStatus.CREATED);
	}
	@GetMapping
	public List<Cart>getAllCarts(){
		return cartService.getAllCarts();
	}
	
	
}

	
