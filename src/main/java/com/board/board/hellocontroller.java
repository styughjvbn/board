package com.board.board;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class hellocontroller {
	@RequestMapping("/hello")
	public String sayhello() {
		return "hello";
	}
}
