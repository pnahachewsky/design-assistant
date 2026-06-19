import {
  getReportableAlerts,
  removeNonReportableAlertsFromHtml,
} from './alert-reportable.utils';

describe('getReportableAlerts', () => {
  const interactiveResultLeadIns = [
    'Based on your selections above',
    'Based on your selection above',
  ];

  function parseBody(html: string): HTMLElement {
    return new DOMParser().parseFromString(html, 'text/html').body;
  }

  it('keeps a regular visible alert', () => {
    const body = parseBody(`
      <div class="alert alert-info">
        <p>Visible page-level alert</p>
      </div>
    `);

    const alerts = getReportableAlerts(body, { interactiveResultLeadIns });

    expect(alerts.length).toBe(1);
    expect(alerts[0]?.textContent).toContain('Visible page-level alert');
  });

  it('counts a nested alert structure as one outer alert', () => {
    const body = parseBody(`
      <div class="alert alert-info">
        <section class="alert alert-info">
          <h2>Nested replacement</h2>
          <p>Visible alert text</p>
        </section>
      </div>
      <div class="alert alert-warning">
        <p>Second alert</p>
      </div>
    `);

    const alerts = getReportableAlerts(body);

    expect(alerts.length).toBe(2);
    expect(alerts[0]?.tagName.toLowerCase()).toBe('div');
    expect(alerts[0]?.querySelector('.alert')).not.toBeNull();
    expect(alerts[1]?.textContent).toContain('Second alert');
  });

  it('excludes hidden interactive answer alerts', () => {
    const body = parseBody(`
      <div>
        <div class="alert alert-warning hidden">
          <p>Based on your selections above:</p>
        </div>
        <div class="alert alert-warning hidden">
          <p>Alternative branch result</p>
        </div>
      </div>
      <div class="alert alert-info">
        <p>Visible page-level alert</p>
      </div>
    `);

    const alerts = getReportableAlerts(body, { interactiveResultLeadIns });

    expect(alerts.length).toBe(1);
    expect(alerts[0]?.textContent).toContain('Visible page-level alert');
  });

  it('excludes visible alerts that start with the lead-in even when they include a heading', () => {
    const body = parseBody(`
      <div class="alert alert-warning">
        <p>Based on your selections above:</p>
        <h3>You may be eligible for the benefit</h3>
        <p>Result text</p>
      </div>
      <div class="alert alert-info">
        <p>Visible page-level alert</p>
      </div>
    `);

    const alerts = getReportableAlerts(body, { interactiveResultLeadIns });

    expect(alerts.length).toBe(1);
    expect(alerts[0]?.textContent).toContain('Visible page-level alert');
  });

  it('excludes visible interactive result alerts without headings', () => {
    const body = parseBody(`
      <div class="alert alert-warning">
        <p>Based on your selection above</p>
        <p>Result text</p>
      </div>
      <div class="alert alert-info">
        <p>Visible page-level alert</p>
      </div>
    `);

    const alerts = getReportableAlerts(body, { interactiveResultLeadIns });

    expect(alerts.length).toBe(1);
    expect(alerts[0]?.textContent).toContain('Visible page-level alert');
  });

  it('excludes hidden alerts individually', () => {
    const body = parseBody(`
      <div class="alert alert-warning hidden" id="maintenance-banner">
        <p>Hidden until launch</p>
      </div>
    `);

    const alerts = getReportableAlerts(body);

    expect(alerts.length).toBe(0);
  });

  it('excludes deterministic fallback alerts by id', () => {
    const body = parseBody(`
      <div class="alert alert-warning mrgn-tp-md" id="norun">
        <p>If the interactive questions do not appear, view the text version.</p>
      </div>
      <div class="alert alert-info">
        <p>Visible page-level alert</p>
      </div>
    `);

    const alerts = getReportableAlerts(body, { interactiveResultLeadIns });

    expect(alerts.length).toBe(1);
    expect(alerts[0]?.textContent).toContain('Visible page-level alert');
  });

  it('excludes alert rewrite failure notices from reportable alerts', () => {
    const body = parseBody(`
      <div class="alert alert-danger" data-alert-rewrite-status="failed">
        <p>GenAI alert rewrite failed.</p>
      </div>
      <div class="alert alert-info">
        <p>Visible page-level alert</p>
      </div>
    `);

    const alerts = getReportableAlerts(body, { interactiveResultLeadIns });

    expect(alerts.length).toBe(1);
    expect(alerts[0]?.textContent).toContain('Visible page-level alert');
  });

  it('removes ignored alerts from raw html while preserving reportable alerts', () => {
    const html = `
      <div class="alert alert-warning hidden">
        <p>Based on your selections above:</p>
      </div>
      <div class="alert alert-warning mrgn-tp-md" id="norun">
        <p>If the interactive questions do not appear, view the text version.</p>
      </div>
      <div class="alert alert-info">
        <p>Visible page-level alert</p>
      </div>
    `;

    const sanitizedHtml = removeNonReportableAlertsFromHtml(html, {
      interactiveResultLeadIns,
    });

    expect(sanitizedHtml).toContain('Visible page-level alert');
    expect(sanitizedHtml).not.toContain('Based on your selections above');
    expect(sanitizedHtml).not.toContain('interactive questions do not appear');
  });
});
