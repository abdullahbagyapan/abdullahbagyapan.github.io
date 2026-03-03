---
title: "Diffie Hellman Key Exchange"
date: 2026-03-03
categories: [number-theory, cryptography]
tags: [public-key-cryptography]
math: true
toc: true
description: Explaining the method for two parties to establish a shared secret over an insecure channel.
---

## Introduction

Let $p$ prime, The set

$$
\begin{aligned}
    (\mathbb{Z}/n\mathbb{Z})^\times
\end{aligned}
$$

consists of all nonzero residue classes modulo $p$. By a classical theorem of Gauss:

- If $p$ is prime, then $(\mathbb{Z}/n\mathbb{Z})^\times$ is cyclic of order $p-1$

Thus there exists a primitive root $g$ such that

$$
\begin{aligned}
    (\mathbb{Z}/p\mathbb{Z})^\times = \{ g^k \bmod p : 0 \le k \le p-2 \}.
\end{aligned}
$$

This yields a canonical isomorphism of abelian groups:

$$
\begin{aligned}
    (\mathbb{Z}/p\mathbb{Z})^\times \;\cong\; \mathbb{Z}/(p-1)\mathbb{Z}
\end{aligned}
$$

So this commutativity is allows us:

$$
\begin{aligned}
    (g^a)^b = (g^b)^a
\end{aligned}
$$

## The Mechanism Behind DHKE

Let $g$ be a primitive root modulo $p$.

Choose integers:

$$
\begin{aligned}
    a,b \in \mathbb{Z}
\end{aligned}
$$

Define:

$$
\begin{aligned}
    A \equiv g^a \pmod{p}, \quad  B \equiv g^b \pmod{p}
\end{aligned}
$$

Then:

$$
\begin{aligned}
    A^b \equiv (g^a)^b \equiv g^{ab} \pmod{p} \\
    B^a \equiv (g^b)^a \equiv g^{ba} \pmod{p} \\
    g^{ab} \equiv g^{ba} \pmod{p}
\end{aligned}
$$


## References

- Whitfield Diffie and Martin E. Hellman, New Directions in Cryptography, IEEE Transactions on Information Theory, 1976.
- Karl-Dieter Crisman, Number Theory: In Context and Interactive, Open Textbook Library.
- Christof Paar and Jan Pelzl, Understanding Cryptography: A Textbook for Students and Practitioners, Springer, 2010.