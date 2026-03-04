---
title: "The RSA Encryption"
date: 2026-03-04
categories: [number-theory, cryptography]
tags: [asymmetric-encryption]
math: true
toc: true
description: Explaining an encryption method that publicly revealing an encryption key does not thereby reveal the corresponding decryption key.
---

## Introduction

Let $n = pq$, where $p, q$ are distinct primes. The arithmetic of RSA takes place in the ring

$$
\begin{aligned}
    \mathbb{Z}_n = \mathbb{Z}/n\mathbb{Z}
\end{aligned}
$$

The multiplicative group of units is

$$
\begin{aligned}
    \mathbb{Z}_n^\times = \{ x \in \mathbb{Z}_n : \gcd(x,n) = 1 \}
\end{aligned}
$$

By the Chinese Remainder Theorem (CRT),

$$
\begin{aligned}
    \mathbb{Z}_n \cong \mathbb{Z}_p \times \mathbb{Z}_q,
    \qquad
    \mathbb{Z}_n^\times \cong \mathbb{Z}_p^\times \times \mathbb{Z}_q^\times
\end{aligned}
$$

Hence,

$$
\begin{aligned}
    \lvert \mathbb{Z}_n^\times \rvert = \varphi(n) = (p-1)(q-1)
\end{aligned}
$$

where $\varphi$ is Euler’s totient function.

It is a trapdoor permutation on the multiplicative group modulo a composite integer, based on the arithmetic of $\mathbb{Z}/n\mathbb{Z}$ and the difficulty of integer factorization.

## Key Generation

- Choose large primes $p,q$.
- Compute $n = pq$
- Compute $\varphi(n) = (p-1)(q-1)$
- Choose $e$ such that

$$
\begin{aligned}
    1 < e < \varphi(n), \quad \gcd(e, \varphi(n)) = 1
\end{aligned}
$$

- Compute $d \equiv e^{-1} \pmod{\varphi(n)}$

`Public Key:`{: .filepath} $(n, e)$
`Private Key:`{: .filepath} $d$

## Encryption and Decryption

Let $m \in \mathbb{Z}_n$

### Encryption

$$
\begin{aligned}
    c \equiv m^e \pmod{n}
\end{aligned}
$$

### Decryption

$$
\begin{aligned}
    m \equiv c^d \pmod{n}
\end{aligned}
$$

## Digital Signatures

RSA can be used not only for encryption but also for digital signatures, which provide authenticity, integrity, and non-repudiation.

### Signing

To sign a message $m \in \mathbb{Z}_n$, compute the signature:

$$
\begin{aligned}
    \sigma \equiv m^d \pmod{n},
\end{aligned}
$$

This operation binds the signer to the message. Only the holder of $d$ can produce $\sigma$.

### Verification

To verify a signature $\sigma$ with the corresponding public key, check:

$$
\begin{aligned}
    m' \equiv \sigma^e \pmod{n}
\end{aligned}
$$

If $m' = m$, the signature is valid. Otherwise, it is rejected.

## References

- R. L. Rivest, A. Shamir, and L. Adleman, “A Method for Obtaining Digital Signatures and Public‑Key Cryptosystems,” Communications of the ACM, vol. 21, no. 2, pp. 120–126, 1978.
- Karl-Dieter Crisman, Number Theory: In Context and Interactive, Open Textbook Library.
- Christof Paar and Jan Pelzl, Understanding Cryptography: A Textbook for Students and Practitioners, Springer, 2010.