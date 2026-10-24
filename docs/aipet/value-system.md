# Value system

The latest design of the pet's value system.

## Hunger

HV (Hunger Value) ranges from 0 to 121, with a death threshold at both ends. Above 100 the pet becomes Overfull, and at 121 it dies immediately; below 30 it becomes Starved, and at 0 it dies immediately.

| Status | Chinese Status Name | Range | Effects |
| --- | --- | --- | --- |
| Immediate death of overfull | 过饱致死 | 121 | Dies immediately |
| Overfull | 过饱 | (100, 120] | Can't talk, Nausea, Weakness, Hurt |
| Full | 饱足 | (90, 100] | None |
| Normal | 正常 | (60, 90] | None |
| Hungry | 饥饿 | (30, 60] | Always talks about food, Weakness |
| Starved | 极度饥饿 | ≤ 30 | Can't talk, Weakness, Hurt |
| Immediate death of starvation | 饿死 | 0 | Dies immediately |

### Hunger value changes

| Trigger | HV Change | Notes |
| --- | --- | --- |
| Walking, talking, and actions | HV-- | Continuous drain, accumulates over time |
| Feeding appropriate food | HV++ | |
| Feeding inappropriate food | HV---- | Plus other penalties |

- HV is only consumed by actions and restored by feeding; there is no natural regeneration.
- Full and Normal impose no effects.
- Both Overfull and Starved lock intelligent dialogue (no LLM calls).
- HV---- is the heaviest penalty and comes with additional penalties, eg. negative effects applied to the pet.

## Affinity

| Chinese Name | English Name | Level | Notes |
| --- | --- | --- | --- |
| 羁绊 | Bonded | 4 | |
| 熟悉 | Familiar | 3 | |
| 正常 | Normal | 2 | Default |
| 戒备 | Guarded | 1 | |
| 坏血 | Badblood | 0 | Irreversible |

### Affinity levels

#### Bonded

The highest affinity level. You've got a bond with your pet at this level.

- Can help with all the things within its ability.
- Even greater Attack & Intelligence bonuses.
- T0 memory space; the pet remembers most of the important things and reflects frequently.

#### Familiar

The next level above Normal. You've become familiar with each other.

- Can help with most of the things within its ability.
- Attack & Intelligence bonus.
- Tier 1 memory space; the pet reflects often.

#### Normal

The default Affinity level. You know each other, but have not talked much.

- Can help with common things within its ability.
- Tier 2 memory space; the pet reflects sometimes.

#### Guarded

The degraded Affinity level. You've done something bad to the pet and it no longer trust you as much as before.

- Won't help with most of the things within its ability.
- Can't talk much, no thought shared.
- Limited memory space; the pet doesn't reflect, but still forms memories.

#### Badblood

The lower end. You've done so many bad things to the pet that it can no longer stand it and loses trust in you forever. This level is irreversible; that is, you can't make a badblood pet trust you again.

- Won't help.
- Won't talk.
- No new memories; the old memory is kept.
- Always keeps you at a distance of no less than 50 blocks.

#### About Badblood

The owner can't reach its badblood pet because the pet simply moves away. A badblood pet's hunger value keeps decreasing, so it will die alone unless someone other than its owner gives it food.

#### Relationship endings

There are two endings to the relationship between a pet and its owner.
1. Turning into Badblood. A Badblood pet's soul can't be revoked by its owner because the owner can never reach the pet.
2. Severed by Soulcut. This can only be done by the owner (the soul-giver).

#### Future feature: Gossip Animals

Non-owners can talk with badblood pets freely because they are no threat to them, and the pets would "share" the "wonderful" experiences and conversations they had with the former owner if the non-owners do ask.

The owner can't hurt the badblood pets or let them stop because they can't get near to the pet, and the non-owners can keep the badblood pets alive with food. Ownership might possibly be transferred in this scenario but let's save it for another day.

## Intelligence

Intelligence is an increase-only value that determines:
- How well the pet accomplishes tasks given by its owner.
- How well the pet would recall its memories and respond.
- How well the pet maintains its memories.
- Which tasks can be delegated to the pet.
- What the pet can find during a Search task.

The intelligence value ranges from 0 (default) to 100. Zero intelligence does not mean no intelligence, but basic intelligence.

To increase a pet's intelligence value, you can delegate tasks to it, provide it with good food, and play with it.

## Attack

Attack determines the damage range a pet can deal in combat with an enemy. The attack value ranges from 0 to 200, and starts at different values depending on the animal species.

Attack increases when the pet:
- is fed good food.
- is played with often.
- exercises.

Attack decreases when the pet:
- is ill.
- remains inactive for a period of time.
- is badly hurt.

## Cleanliness

Cleanliness is how clean the pet is. The pet becomes dirty when it goes outside or taking combats. Too low cleanliness causes illness which can eventually kill the animal if left untreated. High cleanliness with high hunger value accelarates HP growth.

## HP

HP is the health of the pet.

The health is not only an indication of how much life the pet is left, but also a factor that affects its behavior and responsiveness. If the health is too low, the pet becomes weak and its Attack also drops.