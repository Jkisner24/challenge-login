package com.challenge.app.domain.port;

import com.challenge.app.domain.model.User;
import java.util.Optional;

public interface IUserRepository {
    User save(User user);
    Optional<User>findByEmail(String email);

}
