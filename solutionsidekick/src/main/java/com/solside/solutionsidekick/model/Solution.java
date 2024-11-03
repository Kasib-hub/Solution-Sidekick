package com.solside.solutionsidekick.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "solutions")
public class Solution {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    private UUID id;
    private String name;
    private String instructions;
    private int sourceConcentration;
    private int sourceVolume;
    private int finalConcentration;
    private int finalVolume;
    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    private LocalDateTime createdAt = LocalDateTime.now();
    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private AppUser user;

    @OneToMany(mappedBy = "solution")
    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "solution")
    @Schema(accessMode = Schema.AccessMode.READ_ONLY)
    private List<Like> likes = new ArrayList<>();

}

