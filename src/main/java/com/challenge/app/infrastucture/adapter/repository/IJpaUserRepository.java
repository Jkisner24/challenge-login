package com.challenge.app.infrastucture.adapter.repository;

import com.challenge.app.domain.model.User;
import com.challenge.app.domain.port.IUserRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IJpaUserRepository extends IUserRepository, JpaRepository <User, Long> {
    Optional<User> findByEmail(String email);
}
