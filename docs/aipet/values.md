# Values

The latest design of the pet's values.

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

### HV Changes

| Trigger | HV Change | Notes |
| --- | --- | --- |
| Walking, talking, and actions | HV-- | Continuous drain, accumulates over time |
| Feeding appropriate food | HV++ | |
| Feeding inappropriate food | HV---- | Plus other punishments |

:::note[Design Notes]
- HV is only consumed by actions and restored by feeding; there is no natural regeneration.
- Full and Normal impose no effects — they are the pet's comfort zone.
- Both Overfull and Starved lock intelligent dialogue (no LLM calls).
- HV---- is the heaviest penalty and comes with additional punishments, like negative effects applied to the pet.
:::

## Affinity

| Chinese Name | English Name | Level | Notes |
| --- | --- | --- | --- |
| 羁绊 | Bonded | 4 | |
| 熟悉 | Familiar | 3 | |
| 正常 | Normal | 2 | Default |
| 戒备 | Guarded | 1 | |
| 坏血 | Badblood | 0 | Irreversible |

| Affinity Level | Description |
| --- | --- |
| Bonded | Can help with all the things within ability.<br/>Attack & Intelligence bonus+<br/>Tier 0 memory space. |
| Familiar | Can help with most of the things within ability.<br/>Attack & Intelligence bonus<br/>Tier 1 memory space. |
| Normal | Can help with common things within ability.<br/>Tier 2 memory space. |
| Guarded | Won't help with most of the things within ability.<br/>Can't talk much, no thought shared.<br/>Limited memory space. |
| Badblood | Won't help<br/>Won't talk<br/>No memory, but the old memory is kept<br/>Keeps you at a distance of no less than 50 blocks |

The badblood pet is unapproachable to its owner, but its hunger value remains ticking. So badblood pets would die alone if no one, other than their owners, give them food.

There's no "unbound" cause the soul-giving is irreversible. It's like "giving birth". You can hate and abuse the baby but the baby is still your child.

:::tip[Future Feature: Gossip Animals]
Non-owners can talk with badblood pets freely because they are no threat to them, and the pets would "share" the "wonderful" experiences and conversations they had with the former owner to them. The owner can't hurt the badblood pets or let them stop because they can't get near to the pet, and the non-owners can keep the badblood pets alive with food. Possibly the ownership can be transferred in this scenario but let's save it for another day.
:::