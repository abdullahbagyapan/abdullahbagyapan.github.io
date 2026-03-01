---
title: "Primitive Roots and Discrete Logarithm"
date: 2026-03-01
categories: [number-theory, cryptography]
tags: [general-congruences,primitive-roots,discrete-logarithm]
math: true
toc: true
description: Explaining the primitive roots and their relations with discrete logarithm problems
---

## Primitive Roots

A primitive root modulo $n$ is an integer $g$ whose powers generate all units modulo $n$. Formally, $g$ is a primitive root mod $n$ if

$$
\begin{aligned}
    \langle g \rangle = (\mathbb{Z}/n\mathbb{Z})^\times
\end{aligned}
$$

i.e.

$$
\begin{aligned}
    \operatorname{ord}_n(g) = \varphi(n)
\end{aligned}
$$

where $\varphi$ is Euler’s totient function.

### Cyclic Groups

The multiplicative group of units modulo $n$

$$
\begin{aligned}
    (\mathbb{Z}/n\mathbb{Z})^\times
\end{aligned}
$$

is cyclic exactly when primitive roots exist.

So a primitive root is simply a generator of this finite abelian group.

This gives:

$$
\begin{aligned}
    a \equiv g^k \pmod{n} \quad \text{for every } \gcd(a,n)=1
\end{aligned}
$$

### Existence Theorem

Primitive roots exist iff

$$
\begin{aligned}
    n \in \{1, 2, 4, p^k, 2p^k\}, \quad p \text{ odd prime}
\end{aligned}
$$

### How to test if $g$ is a primitive root mod $p$

Let

$$
\begin{aligned}
    \varphi(p) = p - 1 = \prod q_i^{e_i}
\end{aligned}
$$

Then $g$ is primitive iff

$$
\begin{aligned}
    g^{\frac{p-1}{q_i}} \not\equiv 1 \pmod{p} \quad \text{for all prime divisors } q_i
\end{aligned}
$$

This follows from Lagrange’s theorem.

### Why Primitive Roots Matter

If $g$ is a primitive root modulo $p$, then:

$$
\begin{aligned}
    \forall a \not\equiv 0 \pmod{p}, \; \exists! \, k \in \{0, \dots, p-1\} \text{ such that } a \equiv g^k \pmod{p}.
\end{aligned}
$$

By bijection:

$$
\begin{aligned}
    (\mathbb{Z}/p\mathbb{Z})^\times \;\cong\; \mathbb{Z}/(p-1)\mathbb{Z}
\end{aligned}
$$

This mapping is the formal basis for the discrete logarithm.

## Discrete Logarithm

Let $p$ be prime and $g$ a primitive root.

For $a \not\equiv 0 \pmod{p}$,the discrete logarithm of $a$ base $g$ is the integer $k$ such that

$$
\begin{aligned}
    g^k \equiv a \pmod{p}
\end{aligned}
$$

We write:

$$
\begin{aligned}
    k = \log_g a
\end{aligned}
$$

## Example

Let's solve the below discrete logarithm problem step by step:

$$
\begin{aligned}
    5x \equiv 17 \pmod{19}
\end{aligned}
$$

### Choose a primitive root

For modulo $19$, a primitive root is $2$.

This means every nonzero element modulo 19 can be written as a power of 2.

We can write:

$$
\begin{aligned}
    5 \equiv 2^{16} \pmod{19}, \qquad 17 \equiv 2^{10} \pmod{19}
\end{aligned}
$$

### Replace the original congruence

Substitute the powers of 2:

$$
\begin{aligned}
    2^{16x} \equiv 2^{10} \pmod{19}
\end{aligned}
$$

### Solve the exponent congruence

Since $2$ is a primitive root, we can drop the base:

$$
\begin{aligned}
    16x \equiv 10 \pmod{18}
\end{aligned}
$$

Simplify by $\gcd(16,10,18) = 2$

$$
\begin{aligned}
    8x \equiv 5 \pmod{9}
\end{aligned}
$$

Multiplicative inverse of 8 modulo 9 is $−1$, so:

$$
\begin{aligned}
    x \equiv -5 \equiv 4 \pmod{9}
\end{aligned}
$$

### Lift to modulus $18$

$$
\begin{aligned}
    x = 4 + 9t, \quad t=0,1
\end{aligned}
$$

## References

- Karl-Dieter Crisman, Number Theory: In Context and Interactive, Open Textbook Library.