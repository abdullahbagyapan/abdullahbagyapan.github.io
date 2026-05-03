---
title: "Commitment Scheme"
date: 2026-05-03
categories: [information-theory, cryptography]
tags: [commitment-schemes, pedersen, hashing, quadratic-residuosity]
math: true
toc: true
description: A formal exploration of cryptographic commitments, their security properties of hiding and binding, and constructions based on hash functions, the Discrete Logarithm, and Quadratic Residuosity.
---

## Introduction

A commitment scheme is a fundamental building block in cryptographic protocols, acting as the digital equivalent of a sealed envelope. It allows a party to commit to a value while keeping it hidden from others, with the ability to reveal it later in a way that proves the value has not been altered.

## Formal Definition

A commitment scheme is defined by a tuple of algorithms $\mathrm{(Setup, Commit, Verify)}$:

- $\mathrm{Setup}(1^\lambda)$: Generates public parameters, $pp$, based on a security parameter $\lambda$.
- $\mathrm{Commit}(pp,m,r) \rightarrow c$: Takes a message $m$ and a random blinding factor $r$ to produce a commitment $c$.
- $\mathrm{Verify}(pp,c,m,r) \rightarrow \{0,1\}$

## Security Properties

A secure commitment scheme must satisfy two competing properties. In practice, a scheme can be perfectly secure in one property but only computationally secure in the other.

### Hiding

The commitment $c$ must not reveal any information about the message $m$.

- `Computational Hiding`{: .filepath}: A Probabilistic Polynomial-Time (PPT) adversary cannot distinguish between $\mathrm{Commit}(m_0)$ and $\mathrm{Commit}(m_1)$ with non-negligible advantage.

### Binding

The committer cannot change the message after the commit phase.

- `Computational Binding`{: .filepath}: A PPT adversary cannot find $(m,r)$ and $(m',r')$ such that $m \neq m'$ and $\mathrm{Verify}(c,m,r) = \mathrm{Verify}(c,m',r') = 1$.

> It is information-theoretically impossible for a scheme to be both perfectly hiding and perfectly binding.

## Core Constructions

### Hash-Based Commitment

This is a common construction in practical applications where algebraic properties (like homomorphism) are not a requirement. It relies on the collision resistance of a cryptographic hash function $H$.

$$
\begin{aligned}
    c = H(m \parallel r)
\end{aligned}
$$

The randomness $r$ is essential; without it, if the message space is small, an adversary could simply hash all possible messages to find a match (breaking the hiding property).

#### Security Analysis

- Computational Hiding: Based on the one-way property of the hash function and the entropy of $r$.
- Computational Binding: Directly reducible to the collision resistance of $H$. If an adversary can find a second pair $(m',r')$ that hashes to the same $c$, they have found a collision.

### Pedersen Commitment (DLP-based)

Based on the hardness of the Discrete Logarithm Problem, this scheme is perfectly hiding and computationally binding. Let $G$ be a group of prime order $q$ where the discrete logarithm is hard. The setup chooses two generators $g, h \in G$.

$$
\begin{aligned}
    c = g^m h^r \bmod p
\end{aligned}
$$

#### The Homomorphic Property

Pedersen commitments are additively homomorphic. If $c_1 = \mathrm{Commit}(m_1,r_1)$ and $c_2 = \mathrm{Commit}(m_2,r_2)$, then:

$$
\begin{aligned}
    c_1 \cdot c_2 = (g^{m_1} h^{r_1})(g^{m_2} h^{r_2}) = g^{m_1 + m_2} h^{r_1 + r_2}
\end{aligned}
$$

This allows for the verification of sums (e.g., in Confidential Transactions) without revealing the individual summands.

### Goldwasser-Micali (QR-based)

This scheme commits to a single bit $b \in {0,1}$ based on the Quadratic Residuosity Assumption. It is perfectly binding and computationally hiding. Let $n = pq$ be an RSA modulus and $y$ be a quadratic non-residue with Jacobi symbol $\left( \frac{n}{y} \right) = 1$

$$
\begin{aligned}
    c = y^b r^2 \bmod n
\end{aligned}
$$

- If $b=0$, $c$ is a quadratic residue.
- If $b=1$, $c$ is a quadratic non-residue.

## Applications

Commitment schemes are the "glue" of complex protocols:

- Zero-Knowledge Proofs: To "lock" the prover's witness before the challenge.
- Coin Flipping: To ensure neither party can change their choice after seeing the other's.
- Verifiable Secret Sharing (VSS): To ensure the dealer distributes consistent shares.

## References

- Blum, M. (1981). Coin Flipping by Telephone: A Protocol for Solving Impossible Problems. Proceedings of COMPCON, 133–137.
- Pedersen, T. P. (1991). Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing. CRYPTO '91.
- Goldwasser, S., & Micali, S. (1984). Probabilistic Encryption. Journal of Computer and System Sciences.
- Halevi, S., & Micali, S. (1996). Practical and Provably-Secure Commitment Schemes from Collision-Free Hashing. EUROCRYPT '96.
