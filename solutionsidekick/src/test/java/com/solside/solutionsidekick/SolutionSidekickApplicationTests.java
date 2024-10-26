package com.solside.solutionsidekick;

import com.solside.solutionsidekick.model.AppUser;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
class SolutionSidekickApplicationTests {

	@Autowired
	private TestRestTemplate restTemplate;

	@ParameterizedTest
	@ValueSource(strings = {"users"})
	@DisplayName("successful call with valid parameters")
	void testTriggerSuccess(String entity) {
		final ResponseEntity<List<?>> result = restTemplate.exchange(
				"/" + entity,
				HttpMethod.GET,
				null,
                new ParameterizedTypeReference<>(){}
		);
		assertThat(result.getStatusCode()).isEqualTo(HttpStatus.OK);
	}

}
