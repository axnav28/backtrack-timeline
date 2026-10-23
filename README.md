# backtrack-timeline

A tiny TypeScript utility for reconstructing explainable timelines from event streams. It de-duplicates by stable event ID, sorts by source timestamp, groups nearby observations, and scores cross-camera candidates while explicitly preserving the fact that temporal proximity is not proof of a common cause.

Created as the open-source companion to [BackTrack](https://github.com/axnav28/backtrack), an evidence-grounded Ring incident investigation workspace.

```ts
import { correlationScore, groupByWindow } from '@axnav28/backtrack-timeline';
const groups = groupByWindow(events, 120_000);
const score = correlationScore(events[0], events[1]);
```

MIT licensed. `npm test` runs the deterministic unit tests.
