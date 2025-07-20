package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Cart;
import com.example.demo.entity.Product;
import com.example.demo.respository.CartRepository;
import com.example.demo.respository.ProductRepository;

@Service
public class CartService {

	private final ProductRepository productRepository;
	public CartService(ProductRepository productRepository, CartRepository cartRepository) {
		super();
		this.productRepository = productRepository;
		this.cartRepository = cartRepository;
	}
	private final CartRepository cartRepository;
	
	public Cart addToCart(Long productId,int quantity) {
		Product product = productRepository.findById(productId).orElseThrow(()->new RuntimeException("Product not found"));
		Cart cartItem = new Cart(product,quantity);
		return cartRepository.save(cartItem);
	}
	public List<Cart>getAllCarts(){
		return cartRepository.findAll();
	}
	
}
