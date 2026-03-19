import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { AlertIssuesContextService } from './alert-issues-context.service';

describe('AlertIssuesContextService', () => {
  let service: AlertIssuesContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlertIssuesContextService,
        {
          provide: TranslateService,
          useValue: {
            instant: (key: string) =>
              key === 'page.alerts.interactiveResultLeadIns'
                ? [
                    'Based on your selections above',
                    'Based on your selection above',
                  ]
                : key,
          },
        },
      ],
    });

    service = TestBed.inject(AlertIssuesContextService);
  });

  it('omits hidden interactive answer alerts from the compact payload', () => {
    const payload = service.buildCompactAlertsIssuesPayload(`
      <main>
        <h1>Who must file</h1>
        <div>
          <div class="alert alert-warning hidden">
            <p>Based on your selections above:</p>
          </div>
          <div class="alert alert-warning hidden">
            <p>Another hidden branch result</p>
          </div>
        </div>
        <div class="alert alert-info">
          <h2>Reminder</h2>
          <p>Visible page-level alert</p>
        </div>
      </main>
    `) as {
      alerts: string[];
      alertCount: number;
      alertSignals: Array<{ alert_index: number; alert_type: string }>;
    };

    expect(payload.alertCount).toBe(1);
    expect(payload.alerts.length).toBe(1);
    expect(payload.alerts[0]).toContain('Visible page-level alert');
    expect(payload.alertSignals).toEqual([
      jasmine.objectContaining({ alert_index: 1, alert_type: 'info' }),
    ]);
  });
});
