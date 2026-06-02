import { Injectable } from '@angular/core';
import { DiffOptions } from '../data/data.model';

@Injectable({
  providedIn: 'root'
})
export class WebDiffService {

  //Generate HTML diff (web page view) using htmldiff-js
  async generateHtmlDiff(originalHtml: string, modifiedHtml: string): Promise<string> {
    const options: DiffOptions = {
      repeatingWordsAccuracy: 0,
      ignoreWhiteSpaceDifferences: true,
      orphanMatchThreshold: 0,
      matchGranularity: 4,
      combineWords: true,
    };

    const { Diff } = await import('@ali-tas/htmldiff-js');

    const diffResult = Diff.execute(
      originalHtml,
      modifiedHtml,
      options,
    ).replace(
      /<(ins|del)[^>]*>(\s|&nbsp;|&#32;|&#160;|&#x00e2;|&#x0080;|&#x00af;|&#x202f;|&#xa0;)+<\/(ins|del)>/gis, // Remove empty or whitespace-only <ins>/<del> tags
      ' ',
    );

    return diffResult;
  }

  //Styles for HTML diff
  getRenderedDiffStyles(): string {
    return `     
    /* Shadow DOM container and layout fixes */
      :host {
        all: initial;
        display: block;
        width: 100%;
        box-sizing: border-box;
      }

      .rendered-content {
        margin: 0;
        padding: 0;
        background-color: #ffffff !important; 
        width: 100%;
        max-width: 100%;
        overflow-wrap: break-word;
        box-sizing: border-box;
        font-family: sans-serif;
      }

      .rendered-content table {
        width: 100%;
        table-layout: auto;
      }

      .rendered-content td, .rendered-content th, .rendered-content pre {
        word-break: break-word;
      }

      .rendered-content pre {
        white-space: pre-wrap;
      }
      
      /* Base styling for ins, del, and updated-link */
      ins,
      del,
      .updated-link {
        display: inline;
        padding: 0 0.3em;
        height: auto;
        border-radius: 0.3em;
        -webkit-box-decoration-break: clone;
        -o-box-decoration-break: clone;
        box-decoration-break: clone;
        margin-left: 0.07em;
        margin-right: 0.07em;
        font-weight: 500;
      }

      /* Inserted text (ins) */
      .rendered-content ins {
        background-color: #d4edda !important;
        color: #155724 !important;
        text-decoration: none !important;
        padding: 2px 4px;
        border-radius: 3px;
        border: 1px solid #c3e6cb;
      }

      /* Deleted text (del) */
      .rendered-content del {
        background-color: #f8d7da !important;
        color: #721c24 !important;
        text-decoration: line-through !important;
        padding: 2px 4px;
        border-radius: 3px;
        border: 1px solid #f5c6cb;
      }

      /* Updated links */
      .updated-link {
        background-color: #FFEE8C;
      }

      /* Highlighting for inserted, deleted, and updated elements */
      del.highlight,
      ins.highlight,
      span.diff-group.highlight,
      .updated-link.highlight:not(.overlay-wrapper.updated-link) {
        outline: 3px dotted #6e2ea7;
        padding-left: 0.35em;
        padding-right: 0.35em;
        line-height: unset;
        position: unset;
        top: unset;
        height: unset;
        transition: padding-left ease 0.3s, padding-right ease 0.3s, color ease 0.7s;
      }

      /* Overlay wrapper styles */
      .overlay-wrapper {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
      }

      .overlay-wrapper::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(131, 213, 168, 0.4);
        z-index: 10;
        border-radius: 5px;
        pointer-events: none;
      }

      .overlay-wrapper.del::before {
        background: rgba(243, 165, 157, 0.5);
      }

      .overlay-wrapper.del::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background: rgba(24, 21, 21, 0.5);
        z-index: 20;
        pointer-events: none;
        opacity: 0.8;
      }

      .overlay-wrapper.updated-link::before {
        background: rgba(250, 237, 165, 0.23);
      }

      .overlay-wrapper.highlight::before {
        border: 2px dotted #000;
      }

      .overlay-wrapper img {
        width: 100%;
        display: block;
      }

      /* Equal-height fallback for preview (WET JS does not run in shadow DOM) */
      .rendered-content .wb-eqht {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
      }

      .rendered-content .wb-eqht > [class*="col-"] {
        display: flex;
      }

      .rendered-content .wb-eqht .well {
        height: 100%;
        width: 100%;
      }

      /* Subway fallback for preview (WET JS does not run in shadow DOM) */
      .rendered-content nav.gc-subway {
        display: block !important;
        border-color: #26374a !important;
      }

      .rendered-content nav.gc-subway dl {
        margin-left: 0.5em;
      }

      .rendered-content nav.gc-subway dl dt,
      .rendered-content nav.gc-subway dl dd {
        border-left: 4px solid #26374a;
        margin: 0;
        padding-left: 1em;
        position: relative;
      }

      .rendered-content nav.gc-subway dl dt {
        font-weight: 400;
      }

      .rendered-content nav.gc-subway dl dd {
        padding-bottom: 1.25em;
        padding-top: 0.25em;
      }

      .rendered-content nav.gc-subway dl dd:last-of-type,
      .rendered-content nav.gc-subway dl dt:last-of-type {
        border-left-color: transparent;
        padding-bottom: 0;
      }

      .rendered-content nav.gc-subway dl dt a::before {
        background-color: #26374a;
        border: 3px solid #26374a;
        border-radius: 50%;
        box-shadow: 0 0 0 10px #fff inset;
        content: "";
        height: 1.2em;
        left: -0.7em;
        position: absolute;
        top: 0;
        width: 1.2em;
      }

      /* Optional connection type styling */
      .cnjnctn-type-or > [class*=cnjnctn-col]:not(:first-child):before {
        content: "or";
      }
    `;
  }
}
