import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, NgtCanvas],
    template: `<ngt-canvas [sceneGraph]="scene" />`,
    styles: [],
})
export class AppComponent {
    scene = Experience;
    title = 'angular-three-test';
}