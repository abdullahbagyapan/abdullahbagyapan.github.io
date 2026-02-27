---
title: "General congruences and Hensel’s Lemma"
date: 2026-02-27
categories: [number-theory]
tags: [general-congruences,newtons-method]
math: true
toc: true
description: Explaining the general congruences and lifting solutions to modulo higher powers by Hensel's Lemma.
---

## General congruences and Hensel’s Lemma

Hensel’s lemma is the standard tool for lifting solutions of congruences modulo $p$ to solutions modulo higher powers $p^k$.

### General congruence problem

Let

$$
\begin{aligned}
    f(x) \in \mathbb{Z}[x],\; p \text{ prime}
\end{aligned}
$$

We want to solve

$$
\begin{aligned}
    f(x) \equiv 0 \pmod{p^n}
\end{aligned}
$$

given a solution modulo $p$.

## Basic form of Hensel’s Lemma

Let $a_0$ satisfy

$$
\begin{aligned}
    f(a_0) \equiv 0 \pmod{p}
\end{aligned}
$$

and assume

$$
\begin{aligned}
    f'(a_0) \not\equiv 0 \pmod{p}
\end{aligned}
$$

Then, for every $k \ge 1$ there exists a `unique`{: .filepath}

$$
\begin{aligned}
    a_k \pmod{p^k}
\end{aligned}
$$

such that

$$
\begin{aligned}
    a_k \equiv a_0 \pmod{p}
\end{aligned}
$$

and

$$
\begin{aligned}
    f(a_k) \equiv 0 \pmod{p^k}
\end{aligned}
$$

So a simple root mod $p$ lifts uniquely to all higher powers.

### Proof

We construct the solution inductively.

#### Step 1 - Induction hypothesis

Assume that for some $k \ge 1$ we have already found an integer $a_k$ such that

$$
\begin{aligned}
    f(a_k) \equiv 0 \pmod{p^k}
\end{aligned}
$$

We will produce a better approximation modulo $p^{k+1}$

#### Step 2 - Form of the next lift

Any integer congruent to $a_k$ modulo $p^k$ has the form

$$
\begin{aligned}
    a_{k+1} = a_k + tp^k
\end{aligned}
$$

for some integer $t$.

#### Step 3 - Expand the polynomial

Using the Taylor expansion for polynomials,

$$
\begin{aligned}
    f(a_k + t p^k) = f(a_k) + t p^k f'(a_k) + p^{2k}(\text{integer})
\end{aligned}
$$

Since $2k \ge k+1$ for $k \ge 1$

$$
\begin{aligned}
    p^{2k}(\text{integer}) \equiv 0 \pmod{p^{k+1}}
\end{aligned}
$$

Thus

$$
\begin{aligned}
    f(a_{k+1}) \equiv f(a_k) + t p^k f'(a_k) \pmod{p^{k+1}}
\end{aligned}
$$

#### Step 4 - Use the induction hypothesis

Because $f(a_k) \equiv 0 \pmod{p^k}$, there exists an integer $m$ such that

$$
\begin{aligned}
    $f(a_k) = p^mm
\end{aligned}
$$

Substitute:

$$
\begin{aligned}
    f(a_{k+1}) \equiv p^k (m + t f'(a_k)) \pmod{p^{k+1}}
\end{aligned}
$$

For this to be divisible by $p^{k+1}$, we need

$$
\begin{aligned}
    m + t f'(a_k) \equiv 0 \pmod{p}
\end{aligned}
$$

#### Step 5 — Solve for $t$

Since

$$
\begin{aligned}
    f'(a_k) \equiv f'(a_0) \not\equiv 0 \pmod{p},
\end{aligned}
$$

the derivative is invertible modulo $p$.

Therefore the linear congruence

$$
\begin{aligned}
    t f'(a_k) \equiv -m \pmod{p}
\end{aligned}
$$

has a unique solution $t \pmod{p}$.

This determines $a_{k+1}$.

So the lift exists.

#### Step 6 - Base case

For $k = 1$, we take $a_1=a_0$, which satisfies the assumptions.

By induction, a solution exists for all $k$.

#### Step 7 - Uniqueness

Suppose $b_{k+1}$ is another solution with

$$
\begin{aligned}
    b_{k+1} \equiv a_k \pmod{p^k}
\end{aligned}
$$

Then

$$
\begin{aligned}
    b_{k+1} = a_k + up^k
\end{aligned}
$$

for some $u$.

Repeating the same computation gives

$$
\begin{aligned}
    m + u f'(a_k) \equiv 0 \pmod{p}
\end{aligned}
$$

Since $f'(a_k)$ is invertible modulo $p$

$$
\begin{aligned}
   u \equiv t \pmod{p}
\end{aligned}
$$

Hence

$$
\begin{aligned}
   b_{k+1} \equiv a_{k+1} \pmod{p^{k+1}}
\end{aligned}
$$

So the lift is unique.

## Example

Solve $x^2 \equiv 2 \pmod{7^2}$.

We want all integers $x$ such that

$$
\begin{aligned}
   x^2 \equiv 2 \pmod{49} \quad (49 = 7^2)
\end{aligned}
$$

### Solve modulo 7

First, solve

$$
\begin{aligned}
   x^2 \equiv 2 \pmod{7}
\end{aligned}
$$

the solutions are:

$$
\begin{aligned}
   x_0 \equiv 3, 4 \pmod{7}
\end{aligned}
$$

### Check derivative

Let

$$
\begin{aligned}
   f(x) = x^2 - 2 \implies f'(x) = 2x
\end{aligned}
$$

Check modulo 7:

$$
\begin{aligned}
    &x_0 = 3: && f'(3) = 6 \not\equiv 0 \pmod{7} \quad \checkmark \\
    &x_0 = 4: && f'(4) = 8 \equiv 1 \not\equiv 0 \pmod{7} \quad \checkmark
\end{aligned}
$$

Both roots are simple, so Hensel’s lemma applies.

### Lift to modulo $7^2$

Formula: $a_1 = a_0 + t \cdot 7$

#### For $a_0 = 3$

- $f(a_1) = (3 + 7t)^2 - 2 \equiv 0 \pmod{49}$

Compute:

$$
\begin{aligned}
    (3 + 7t)^2 = 9 + 42t + 49t^2 \equiv 9 + 42t \pmod{49}
\end{aligned}
$$

Want:

$$
\begin{aligned}
    9 + 42t \equiv 2 \pmod{49} \;\;\implies\;\; 42t \equiv -7 \equiv 42 \pmod{49}
\end{aligned}
$$

Solve $42t \equiv 42 \pmod{49}$.
- $\gcd(42,49) = 7$, divide both sides by 7:

$$
\begin{aligned}
    6t \equiv 6 \pmod{7} \;\;\implies\;\; t \equiv 1 \pmod{7}
\end{aligned}
$$

So $t=1$. Then

$$
\begin{aligned}
    a_1 = 3 + 7 \cdot 1 = 10
\end{aligned}
$$

#### For $a_0 = 4$

- $f(a_1) = (4 + 7t)^2 - 2 \equiv 0 \pmod{49}$

Compute:

$$
\begin{aligned}
    (4 + 7t)^2 = 16 + 56t + 49t^2 \equiv 16 + 56t \pmod{49}
\end{aligned}
$$

Want:

$$
\begin{aligned}
    16 + 56t \equiv 2 \pmod{49} \;\;\implies\;\; 56t \equiv -14 \equiv 35 \pmod{49}
\end{aligned}
$$

Solve $56t \equiv 35 \pmod{49}$.
- $\gcd(56,49) = 7$, divide both sides by 7:

$$
\begin{aligned}
    8t \equiv 5 \pmod{7} \;\;\implies\;\; t \equiv 5 \pmod{7}
\end{aligned}
$$

So $t=5$. Then

$$
\begin{aligned}
    a_1 = 4 + 7 \cdot 5 = 39
\end{aligned}
$$

## References

- Karl-Dieter Crisman, Number Theory: In Context and Interactive, Open Textbook Library.