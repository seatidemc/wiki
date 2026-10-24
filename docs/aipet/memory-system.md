# Memory system

The memory system of the pets is the Hierarchical Perception design originated from the real memory phenomenon as a simplified model. There are three types of memory:
- Specifics: the recent experience and conversation summary the pet had with its owner.
- Impression: the impression derived from the specifics with common logic (embedded in the LLM) when the model feels it necessary.
- Portrait: the prersistent, overall cognition of what the owner is like.

## Memory transition

### Creation

- The Specifics are unconditionally added to the pet's memory once a meaningful event is completed.
- The Impressions are conditionally derived from the Specifics and current experience using tools in an ongoing Agent loop.
- The Portrait is updated when a loop ends and the Impressions meet certain criteria, eg. the memory includes similar or contradictory Impression entries.

### Elimination

Specifics and Impressions represent short-term and long-term memory respectively, and both are temporary. The elimination of Specifics and Impressions follows an LRU-like strategy, that is, stale Specifics and Impressions are cleared after they have not been read for a period of time, which is longer for Impressions than for Specifics.

While being permanent, Portrait is limited in length.

## Memory detail

### Specifics and Impressions

Specifics and Impressions are fundamentally append-only lists with elimination strategy and different granularity.

Specific entry TypeScript pseudo-definition:

```ts
type SpecificEntry = SpecificConversationEntry | SpecificExperienceEntry

type SpecificEntryBase = {
    summary: string,
    startedAt: string,
    endedAt: string,
    actions: Action[] // Action is a string enumeration type.
}

type SpecificConversationEntry = SpecificEntryBase & {
    type: 'conversation'
}

type SpecificExperienceEntry = SpecificEntryBase & {
    type: 'experience',
    rating: number
}
```

Impression entry Typescript pseudo-definition:

```ts
type ImpressionEntry = {
    summary: string,
    attitude: 'positive' | 'negative' | 'neutral',
    priority: number // Ranges from 0-2, where 0 is the high end.
}
```

The append-only-ness of both memories ensures their truthfulness while creates the space of contradiction and duplicate entries.

### Portrait

The Portrait is a text describes the overall cognition of what the owner like based on the Specifics and Impressions. The text is hard-limited within a certain length.

The updating of a Portrait is a read-and-write process with the old Portrait being one of the references.

### Other details

- Memories are written in the first person, as the pet.
- Building and updating memories also updates Affinity levels.
- The memory space is limited based on the Affinity level, i.e. you get more memories space when it's necessary.