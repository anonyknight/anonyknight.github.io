---
title: Q-learning algorithm
date: 'August 8, 2021'
tags: ['OMSCS', 'Algorithms', 'Machine-Learning']
---

## Q-Learning intro

It use utility table for Q-Values.

The best part of Q-Learning: it guarantees to provide a optimal policy.

What's Q? 

Q means the function that the algorithm computes.

$Q[s,a]=$ immediate rewards + discounted rewards

* Short term rewards: Daily return
* Long term rewards: cumulative return

How to use Q?

$\Pi(s)=argmax_a(Q[s,a])$ 

The optimal:

$\Pi^*(s)=argmax_a(Q^*[s,a])$ 

### Update Rule

$Q'[s,a]$ =$(1-\alpha)Q[s,a]$ + $\alpha$ * improved estimate

where Improved Estimate 

= $r$ + $\gamma$ * later rewards 

= $r$ + $\gamma$ * $Q[s',argmax_a(Q[s',a'])$

$\alpha$ : Learning rate [0, 1.0]

$\gamma$ : discount rate [0, 1.0]


$<!-- $Q_i^1 *\gamma$ -->$

### State

Can be used as state

* Adjusted close/SMA
* Bollinger Band Value
* P/E Ratio
* Holding stock
* Return since entry

Creating the state

* State is an integer
* discretize each factor
* combine all factors

### Discretizing

Convert a real number into integer.

## Summary

It's a model free algorithm that does not know Transition matrix T 
or rewards function.

### Build a model

* Define states, actions, rewards
* Choose in-sample training period.
* iterate: Q-Table update
* back

Steps:

1. Init Q table
2. observe S
3. execute a, obverse $S'$, r
4. Update Q with $<s, a, s', r>$

### Testing a model

* Backtest on later data.

## Dyna-Q

Build up Transition matrix T and Rewards matrix R to speed up model convergences
for Q-Learning.

The real world training is expensive, we hallucinate many additional interactions,
100 rounds.

### Learning T

$T[s,a,s']$ = prob $s,a->s'$

Init $T_c[]$ = 0.00001

while executing, observe s,a,s'

increment $T_c[s,a,s']$

$T[s,a,s']=T_c[s,a,s']/(\sum_i T[s,a,i])$

### Learning R

$R'[s,a]=(1-\alpha)R[s,a]+\alpha*r$

r = immediate rewards.

R = expected reward for s,a.


### Dyna-Q Algorithm

$T'[s,a,s']$ update

$R'[s,a]$ update

* s = random
* a = random
* s' = infer from T[]
* r = R[s,a]

Update Q with $<s,a,s',r>$

### Reference

[Reinforcement Q-Learning from Scratch in Python with OpenAI Gym](https://www.learndatasci.com/tutorials/reinforcement-q-learning-scratch-python-openai-gym/)

[Simple Reinforcement Learning: Q-learning](https://towardsdatascience.com/simple-reinforcement-learning-q-learning-fcddc4b6fe56)

[Q-Learning in Python](https://www.geeksforgeeks.org/q-learning-in-python/)

[Dyna-Q-Learning](https://github.com/Bobyue0118/Dyna-Q-Learning/blob/master/src/agent.py)

[Learn about Queue in Python](https://www.scaler.com/topics/queue-in-python/)
