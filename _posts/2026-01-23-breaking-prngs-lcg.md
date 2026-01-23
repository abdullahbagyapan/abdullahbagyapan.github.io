---
title: "Breaking PRNGs: Linear Congruential Generators"
date: 2026-01-23
categories: [number-theory, modular-arithmetic, algorithms, random-number-generator]
tags: [cryptography, randomness]
math: true
toc: true
description: Explaining how to recover secret keys on LCG.
---

## Definition

An LCG is defined by

$$
\begin{aligned}
    x_{n+1} \equiv ax_{n} + c  \pmod{m}
\end{aligned}
$$

with unknown or partially known parameters:

- modulus $m$
- multiplier $a$
- increment $c$
- state $x_{n}$

## Breaking LCG

Assume you observe `consecutive outputs`{: .filepath}:

$$
\begin{aligned}
    x_0, x_1, x_2, x_3\ldots
\end{aligned}
$$

### Recover the modulus $m$

From:

$$
\begin{aligned}
    x_{n+1} - x_{n} \equiv a(x_{n} - x_{n-1}) + c  \pmod{m}
\end{aligned}
$$

Define:

$$
\begin{aligned}
    d_n = x_{n+1} - x_{n}
\end{aligned}
$$

Then:

$$
\begin{aligned}
    d_{n+1}d_{n-1} - d_{n}^2 \equiv 0 \pmod{m}
\end{aligned}
$$

So for several $n$, compute:

$$
\begin{aligned}
    z_{n} &= d_{n+1}d_{n-1} - d_{n}^2
\end{aligned}
$$

Then:

$$
\begin{aligned}
    m &= gcd(z_1, z_2, z_3, \ldots)
\end{aligned}
$$

This works reliably with ~5-10 outputs unless the data is degenerate.

### Recover multiplier $a$

Once $m$ is known:

$$
\begin{aligned}
    a \equiv (x_2 - x_1)(x_1 - x_0)^{-1} \pmod{m}
\end{aligned}
$$

Compute modular inverse via extended Euclidean algorithm.

### Recover increment $c$

$$
\begin{aligned}
    c \equiv x_1 - ax_0 \pmod{m}
\end{aligned}
$$


Once $(a,c,m)$ are known, the generator is fully broken.


## References

- G. Marsaglia, “Random numbers fall mainly in the planes,” Proceedings of the National Academy of Sciences of the United States of America. Available: <https://www.pnas.org/doi/epdf/10.1073/pnas.61.1.25>

- H. Krawczyk, “How to predict congruential generators,” in Advances in Cryptology — CRYPTO ’92. Available: <https://link.springer.com/content/pdf/10.1007/0-387-34805-0_14.pdf>

