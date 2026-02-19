---
title: "The Fundamental Theorem of Arithmetic"
date: 2026-01-23
categories: [number-theory]
tags: [prime-numbers]
math: true
toc: true
description: Explaining how to proof FTA.
---

## Definition

A `prime number`{: .filepath}: is an integer $p > 1$ whose only positive divisors are $1$ and $p$.

A `prime factorization`{: .filepath}: of an integer $n > 1$ is a representation:

$$
\begin{aligned}
    n = p_1 p_2 \cdots p_k
\end{aligned}
$$

where each  $p_i$ is prime.


## Fundamental Theorem of Arithmetic

For every integer $n>1$:

1. `Existence`{: .filepath}: $n$ can be written as a product of primes.
2. `Uniqueness`{: .filepath}: This factorization is unique up to ordering.


## Proof

### Existence

We prove by `strong induction`{: .filepath}: on $n$.

#### Base case

$$
\begin{aligned}
    n = 2
\end{aligned}
$$

is prime, so the statement holds.

#### Induction hypothesis

Assume every integer $m$ with

$$
\begin{aligned}
    2 \le m < n
\end{aligned}
$$

has a prime factorization.

#### Inductive step

If $n$ is prime, we are done.

If $n$ is composite, then

$$
\begin{aligned}
    n = ab
\end{aligned}
$$

with

$$
\begin{aligned}
    1 < a,b < n.
\end{aligned}
$$

By the induction hypothesis, both $a$ and $b$ have prime factorizations:

$$
\begin{aligned}
    a = p_1 \cdots p_r,
    \qquad
    b = q_1 \cdots q_s.
\end{aligned}
$$

Hence

$$
\begin{aligned}
    n = p_1 \cdots p_r q_1 \cdots q_s,
\end{aligned}
$$

which is a product of primes.

### Euclid’s Lemma

If $p$ is prime and

$$
\begin{aligned}
    p \mid ab,
\end{aligned}
$$

then

$$
\begin{aligned}
    p \mid a
    \quad \text{or} \quad
    p \mid b.
\end{aligned}
$$

#### Proof

If $p \nmid a$, then $\gcd(p,a)=1$.  
By Bézout:

$$
\begin{aligned}
    px + ay = 1.
\end{aligned}
$$


Multiplying by $b$:

$$
\begin{aligned}
    pbx + aby = b.
\end{aligned}
$$

Since $p \mid ab$, the right-hand side is divisible by $p$, so $p \mid b$.


### Uniqueness

Suppose

$$
\begin{aligned}
    n = p_1 \cdots p_r = q_1 \cdots q_s
\end{aligned}
$$

are two prime factorizations.

Since $p_1 \mid q_1 \cdots q_s$, Euclid’s lemma implies

$$
\begin{aligned}
    p_1 = q_j
\end{aligned}
$$

for some $j$.

Cancel this common prime and repeat.

After finitely many steps:

$$
\begin{aligned}
    r = s
\end{aligned}
$$

and the factorizations differ only by order.


## References

- Karl-Dieter Crisman, Number Theory: In Context and Interactive, Open Textbook Library.