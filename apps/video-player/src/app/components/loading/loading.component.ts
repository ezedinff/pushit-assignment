import { Component } from '@angular/core';

@Component({
  selector: 'pushit-loading',
  template: `
    <div class="loading-overlay">
      <div class="loading">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  styles: [
    `
      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .loading {
        display: inline-block;
        position: fixed;
        width: 80px;
        height: 80px;
        margin: 0 auto;
      }
      .loading div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #b91c1c;
        animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
      }
      .loading div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
      }
      .loading div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
      }
      .loading div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
      }
      @keyframes loading {
        0% {
          top: 8px;
          height: 64px;
        }
        50%,
        100% {
          top: 24px;
          height: 32px;
        }
      }
    `,
  ],
})
export class LoadingComponent {}
