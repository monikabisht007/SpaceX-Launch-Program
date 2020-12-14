import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
          ],
          providers: [CommonService, HttpClient],
    });
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAuthors', () => {
    service.getAuthors();
    expect(service).toBeTruthy();
  });

  it('should call getTitles', () => {
      const title = 'Sonnet';
      service.getTitles(title);
      expect(service).toBeTruthy();
  });
  it('should call getAuthorWithTitles', () => {
    const form = {
        form: {
        value: {
            author: 'William',
            title: 'A posion tree'
        }
    }
    };
    service.getAuthorWithTitles(form);
    expect(service).toBeTruthy();
  });
});
