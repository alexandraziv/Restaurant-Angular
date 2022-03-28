import { TestBed } from '@angular/core/testing';

import { DinningRoomService } from './dinning-room.service';

describe('DinningRoomService', () => {
  let service: DinningRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinningRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
