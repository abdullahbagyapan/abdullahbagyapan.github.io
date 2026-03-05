---
title: "The Secret Sharing"
date: 2026-03-05
categories: [information-theory, cryptography]
tags: [shamirs-secret-sharing]
math: true
toc: true
description: Explaining how to divide data $D$ into $n$ pieces in such a way that $D$ is easily reconstructable from any $k$ pieces but even complete knowledge of $k - 1$ pieces reveals absolutely no information about $D$.
---

## Introduction

Secret sharing is a cryptographic technique that allows a secret (like a key or password) to be split into multiple pieces, called shares.

## The Core Idea

Let

- $S$ be a secret in a finite field $\mathbb{F}_p$
- $n$ participants
- threshold $t$ where $1 \leq t \leq n$

The dealer samples a random polynomial

$$
\begin{aligned}
    f(x) = S + a_1 x + a_2 x^2 + \cdots + a_{t-1} x^{t-1}
\end{aligned}
$$

The secret is embedded as the constant coefficient.

$$
\begin{aligned}
    f(0) = S
\end{aligned}
$$

### Share Distribution

Each participant $P_i$ receives the point

$$
\begin{aligned}
    \text{Share}_i = (x_i, f(x_i)), \quad x_i \neq 0
\end{aligned}
$$

Geometrically, each share is a point on a polynomial curve.

### Reconstruction Mechanism

Any $t$ shares determine a unique polynomial of degree $t−1$. Thus with $t$ points one can reconstruct $f(x)$ using Lagrange interpolation.

$$
\begin{aligned}
    f(x) = \sum_{i=1}^{t} y_i \ell_i(x)
\end{aligned}
$$

where

$$
\begin{aligned}    
    \ell_i(x) =
    \prod_{\substack{1 \le j \le t \\ j \ne i}}
    \frac{x - x_j}{x_i - x_j}
\end{aligned}
$$

The secret is obtained by $f(0)$:

### Why We are Working on Prime Field

Secret sharing schemes such as Shamir’s scheme are implemented over a field because the algebra required for correctness and security relies on properties that only fields guarantee.

#### Multiplicative inverse

The reconstruction step uses Lagrange interpolation that formula requires division i.e. multiplicative inverse. In a field, every non-zero element has a multiplicative inverse, so division is always well-defined

#### Uniqueness of polynomial interpolation

A key theorem used by the scheme:

- Over a field, a polynomial of degree $d$ is uniquely determined by $d+1$ distinct points.

This theorem depends on the absence of zero divisors. Fields guarantee this property.

If we instead worked in a ring with zero divisors (e.g. $\mathbb{Z}_{15}$), multiple different polynomials could pass through the same set of points. That would break the correctness of reconstruction.

## References

- Shamir, A. How to Share a Secret. Communications of the ACM, 22(11), 612–613, 1979. DOI: 10.1145/359168.359176

