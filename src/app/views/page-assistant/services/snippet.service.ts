import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SnippetService {
  applySnippet(
    template: string,
    replacements: Record<string, string>,
  ): string {
    let output = template;
    for (const [key, value] of Object.entries(replacements)) {
      output = output.split(`{{${key}}}`).join(value);
    }
    return output;
  }
}
