import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { LeftPanel } from './left-panel/left-panel';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LeftPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AdminPanel');
}
