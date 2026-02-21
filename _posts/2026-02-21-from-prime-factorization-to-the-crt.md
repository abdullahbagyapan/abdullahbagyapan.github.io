---
title: "From Prime Factorization to the Chinese Remainder Theorem"
date: 2026-02-21
categories: [number-theory]
tags: [prime-numbers, prime-factorization, the-fundamental-theorem-of-arithmetic, chienese-remainder-theorem]
math: true
toc: true
description: Exploring the connection between prime factorization and chinese remainder theorem.
---

## From Prime Factorization to the Chinese Remainder Theorem

The Fundamental Theorem of Arithmetic describes the multiplicative structure of an integer.

The Chinese Remainder Theorem describes the structure of arithmetic modulo that integer.

Let

$$
\begin{aligned}
    n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}
\end{aligned}
$$

be the prime factorization of $n$.

Since distinct primes are coprime, we have

$$
\begin{aligned}
    \gcd(p_{i}^{e_i}, p_{j}^{e_j}) = 1 \quad (i \ne j)
\end{aligned}
$$

This coprimality is precisely the hypothesis required for the Chinese Remainder Theorem.


### Chinese Remainder Theorem

If

$$
\begin{aligned}
    \gcd(n_{i}, n_{j}) = 1 \quad (i \ne j)
\end{aligned}
$$

then the system

$$
\begin{aligned}
    x &\equiv a_1 \pmod{n_1} \\
    x &\equiv a_2 \pmod{n_2} \\
    &\ \vdots \\
    x &\equiv a_k \pmod{n_k}
\end{aligned}
$$

has a unique solution modulo

$$
\begin{aligned}
    n_1 n_2 \dots n_k
\end{aligned}
$$

### Applying CRT to the Prime Factorization of $n$

By the Fundamental Theorem of Arithmetic,

$$
\begin{aligned}
    n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}
\end{aligned}
$$

with pairwise coprime factors. Therefore CRT gives:

$$
\begin{aligned}
    x \equiv a \pmod{n}
    \quad\Longleftrightarrow\quad
    \begin{cases}
        x \equiv a \pmod{p_1^{e_1}} \\
        \vdots \\
        x \equiv a \pmod{p_k^{e_k}}
    \end{cases}
\end{aligned}
$$

So every congruence modulo $n$ splits into independent congruences modulo prime powers.

### Structural Interpretation

The Fundamental Theorem of Arithmetic factorizes the integer $n$.

The Chinese Remainder Theorem factorizes arithmetic modulo $n$.

In modern notation:

$$
\begin{aligned}
    \mathbb{Z}/n\mathbb{Z}
    \cong
    \mathbb{Z}/p_1^{e_1}\mathbb{Z}
    \times \cdots \times
    \mathbb{Z}/p_k^{e_k}\mathbb{Z}.
\end{aligned}
$$

Thus:

- integers decompose into primes,
- modular arithmetic decomposes into prime–power components.

### Example

Solve the linear congruence

$$
\begin{aligned}
    14x &\equiv 30 \pmod{100}
\end{aligned}
$$

#### Check the solvability condition

A congruence $ax \equiv b \pmod{n}$ has solutions iff

$$
\begin{aligned}
    \gcd(a, n) \mid b
\end{aligned}
$$

Compute

$$
\begin{aligned}
    \gcd(14,100) = 2
\end{aligned}
$$

Since $2 \mid 30$, solutions exist.

#### Reduce the congruence

Divide everything by $2$:

$$
\begin{aligned}
    7x &\equiv 15 \pmod{50}
\end{aligned}
$$

Now $\gcd(7, 50) = 1$, so there is a unique solution modulo $50$.

#### Use the Fundamental Theorem of Arithmetic

$$
\begin{aligned}
    50 = 2 \cdot 5^2.
\end{aligned}
$$

Since the factors are coprime, CRT applies.

#### Splitting the modulus into prime powers

$$
\begin{aligned}
    7x &\equiv 15 \pmod{50}
    \quad \Longleftrightarrow \quad
    \begin{cases}
    7x &\equiv 15 \pmod{2} \\
    7x &\equiv 15 \pmod{25}
    \end{cases}
\end{aligned}
$$

#### Solve each congruence

$$
\begin{aligned}
    7x \equiv 15 \pmod{2}
    \Rightarrow
    x \equiv 1 \pmod{2}.
\end{aligned}
$$

Find the inverse of $7$ modulo $25$

$$
\begin{aligned}
    7^{-1} \equiv 18 \pmod{25}
\end{aligned}
$$

So

$$
\begin{aligned}
    7x &\equiv 15 \pmod{25}
    \Rightarrow
    x \equiv 18 \cdot 15 \equiv 270 \equiv 20 \pmod{25}.
\end{aligned}
$$

#### Recombine using CRT

We solve

$$
\begin{cases}
    x \equiv 1 \pmod{2} \\
    x \equiv 20 \pmod{25}
\end{cases}
$$

Numbers congruent to $20 \pmod{25}$

$$
\begin{aligned}
    20,45,70,95, \cdots 
\end{aligned}
$$

The odd one is $45$, so

$$
\begin{aligned}
    x \equiv 45 \pmod{50} 
\end{aligned}
$$

#### Lift to modulus $100$

$$
\begin{aligned}
    x = 45 + 50t, \quad t=0,1
\end{aligned}
$$

## References

- Karl-Dieter Crisman, Number Theory: In Context and Interactive, Open Textbook Library.