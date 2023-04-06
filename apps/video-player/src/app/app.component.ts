import { Component } from "@angular/core";
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingService } from "./components/loading/loading.service";
import { LoadingComponent } from "./components/loading/loading.component";

@Component({
  selector: "pushit-assignment-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  constructor(private overlay: Overlay, private loadingService: LoadingService) {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    this.loadingService.loading$.subscribe((loading) => {
      if (loading) {
        // check if the overlay is already attached
        if (overlayRef.hasAttached()) {
          return;
        }
        // attach the component to the overlay
        overlayRef.attach(new ComponentPortal(LoadingComponent));
      } else {
        // detach the component from the overlay
        overlayRef.detach();
      }
    });
  }
}
