import { describe, expect, it } from 'vitest';
import { groupByWindow, normalize } from '../src/index';
const events = [{ id: 'b', source: 'door', timestamp: '2026-01-01T00:01:00Z' }, { id: 'a', source: 'drive', timestamp: '2026-01-01T00:00:00Z', endTimestamp: '2026-01-01T00:00:10Z' }, { id: 'a', source: 'drive', timestamp: '2026-01-01T00:00:00Z' }];
describe('backtrack-timeline', () => { it('deduplicates and orders events', () => expect(normalize(events).map(event => event.id)).toEqual(['a', 'b'])); it('explains temporal grouping without asserting causality', () => { const groups = groupByWindow(events, 120000); expect(groups).toHaveLength(1); expect(groups[0].rationale).toContain('not proof'); }); });
