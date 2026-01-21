---
title: "Modular Multiplicative Inverse"
date: 2026-01-21
categories: [number-theory, modular-arithmetic]
tags: [cryptography]
math: true
toc: true
description: Explaining the modular multiplicative inverse using group theory and number theory.
---

## Introduction

The modular multiplicative inverse is a fundamental concept connecting elementary number theory with abstract algebra. Given an integer $n \ge 2$ an integer $a$ is said to have a modular inverse modulo $n$ if there exists an integer $x$ such that

$$
\begin{aligned}
    ax \equiv 1 \pmod{n}
\end{aligned}
$$

Such an inverse exists if and only if $gcd(a,n) = 1$, a consequence of Bézout’s identity. In algebraic terms, this means that $[a]$ is a unit in the ring $\mathbb{Z}/n\mathbb{Z}$ with inverses taken in the unit group $(\mathbb{Z}/n\mathbb{Z})^{\times}$. When $n = p$ is prime, $\mathbb{Z}/p\mathbb{Z}$ is a field, so every nonzero element has a modular inverse; for composite $n$, invertibility is restricted to elements coprime to $n$.

## Proof

$$(\Rightarrow)$$

Assume there exists $x \in \mathbb{Z}$ such that

$$
\begin{aligned}
    ax \equiv 1 \pmod{n}
\end{aligned}
$$

Then $ax - 1 = kn$ for some $k \in \mathbb{Z}$, so

$$
\begin{aligned}
    ax + n(-k) = 1
\end{aligned}
$$

Thus $1$ is an integer linear combination of $a$ and $n$, which implies

$$
\begin{aligned}
    gcd(a,n) = 1
\end{aligned}
$$

$$(\Leftarrow)$$

Assume $gcd(a,n) = 1$. By `Bézout’s identity`{: .filepath}, there exist integers $x,y$ such that

$$
\begin{aligned}
    ax + ny = 1
\end{aligned}
$$

Reducing modulo $n$ yields

$$
\begin{aligned}
    ax \equiv 1 \pmod{n}
\end{aligned}
$$

so $x$ is a modular inverse of $a$ modulo $n$.


## Example

Find the modular multiplicative inverse of $34$ modulo $143$.

We seek an integer $x$ such that

$$
\begin{aligned}
    34x \equiv 1 \pmod{143}
\end{aligned}
$$

First, check that an inverse exists:

$$
\begin{aligned}
    gcd(34,143) = 1
\end{aligned}
$$

so $34$ is invertible modulo $143$.

Apply the extended Euclidean algorithm:

$$
\begin{aligned}
    143 &= 4 \cdot 34 + 7, \\
    34 &= 4 \cdot 7 + 6, \\
    7 &= 1 \cdot 6 + 1. \\
\end{aligned}
$$

Back-substituting gives

$$
\begin{aligned}
    1 &= 7 - 6 \\
    &= 7 - (34 - 4\cdot 7) \\
    &= 5\cdot 7 - 34 \\
    &= 5(143 - 4\cdot 34) - 34 \\
    &= 5\cdot 143 - 21\cdot 34.
\end{aligned}
$$

Reducing modulo $143$,

$$
\begin{aligned}
    34\cdot(-21) \equiv 1 \pmod{143}
\end{aligned}
$$

so

$$
\begin{aligned}
    34^{-1} \equiv -21 \equiv 122 \pmod{143}.
\end{aligned}
$$

## References

- J. S. Milne, Group Theory Course Notes, Univ. Michigan. Available: <https://www.jmilne.org/math/CourseNotes/GT.pdf>
- F. Guevara, Euclid’s Algorithm and the Extended Euclidean Algorithm, Univ. of Utah. Available: <https://www.math.utah.edu/~fguevara/ACCESS2013/Euclid.pdf>


