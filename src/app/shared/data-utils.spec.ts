import { TestBed } from '@angular/core/testing';
import { DataUtils } from "./data-utils";

describe('DataUtils', () => {
  let service: DataUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
describe('countDays', () => {
  it('counts both the start and the end date', () => {
    expect(countDays('2026-10-26', '2026-10-30')).toBe(5);
  });

  it('works across a month change', () => {
    expect(countDays('2026-10-30', '2026-11-02')).toBe(4);
  });

  it('throws when the end date is before the start date', () => {
    expect(() => countDays('2026-10-30', '2026-10-26')).toThrow();
  });
});

describe('countWorkingDays', () => {
  it('ignores the weekend', () => {
    // Du vendredi 30 octobre au lundi 2 novembre 2026 : 2 jours ouvres.
    expect(countWorkingDays('2026-10-30', '2026-11-02')).toBe(2);
  });
});
