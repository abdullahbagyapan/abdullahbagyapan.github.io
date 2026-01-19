---
title: "The Random Number Generator"
date: 2026-01-19
categories: [random-number-generator, algorithms]
tags: [cryptography, randomness]
math: true
toc: true
description: Explaining the randomness and random number generators.
---


## Introduction

The random number generation (RNG) is a process that generates a sequence of numbers. it would be categories into:

- True Random Number Generator (TRNG)
- Pseudorandom Number Generator (PRNG)
- Cryptograpically Secure Pseudorandom Number Generator (CSPRNG)

## True Random Number Generator (TRNG)

True random number generators (TRNGs) are characterized by the fact that their output cannot be reproduced. For instance, if we flip a coin 100 times and record the resulting sequence of 100 bits, it will be virtually impossible for anyone on Earth to generate the same 100-bit sequence.

Modern CPUs are often equipped with hardware-based TRNGs or else there is a TPM (trusted platform module) on the motherboard which contains a TRNG. Without a hardware TRNG, random processes within the computer are used as entropy sources.

## Cryptograpically Secure Pseudorandom Number Generator (CSPRNG)

Cryptographically secure pseudorandom number generators (CSPRNGs) are a special type of PRNG that possess the following additional property: A CSPRNG is a PRNG which is unpredictable.

## Pseudorandom Number Generator (PRNG)

Pseudorandom number generators (PRNGs) generate sequences which are computed from an initial seed value. Often they are computed recursively in the following way:

$$
\begin{aligned}
    s_0     &= \text{seed} \\
    s_{i+1} &= f(s_i), \quad i = 0,1,\dots
\end{aligned}
$$

A popular example is the linear congruential generator (LCG):

$$
\begin{aligned}
    s_0     &= \text{seed} \\
    s_{i+1} &\equiv a s_i + b \pmod m, \quad i = 0,1,\dots
\end{aligned}
$$

where a, b, m are integer constants. Note that PRNGs are not random in a true sense because they can be computed and are thus completely deterministic.

A common requirement of PRNGs is that they possess good statistical properties, meaning their output approximates a sequence of true random numbers.

Here is Python implementation for linear congruential generator (LCG):

```python
class LinearCongruentialGenerator:

    def __init__(self, seed = 42, multiplier = 1103515245, increment = 12345, modulus = 2**31):
        # parameters selected from ANSI C (ISO/IEC 9899:201x)

        self.seed = seed
        self.modulus = modulus
        self.increment = increment
        self.multiplier = multiplier

    def srand(self):

        self.seed = ((self.seed * self.multiplier) + self.increment) % self.modulus
        return int(self.seed / 65536)
```

## References

- C. Paar and J. Pelzl, Understanding Cryptography: A Textbook for Students and Practitioners, 2nd ed. Springer, 2010.
- ISO/IEC 9899:2011, Programming Languages — C, International Organization for Standardization, 2011. Available: <https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf>


