package com.corejavahub.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.corejavahub.model.User;
import com.corejavahub.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Optional<User> optional = userRepository.findByEmail(username);

		if (optional.isPresent()) {

			User user = optional.get();

			List<GrantedAuthority> authorities = new ArrayList<>();

			return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
					authorities);
		}

		throw new BadCredentialsException("No User Found");

	}

}
