import { Routes } from '@angular/router';

//components
import { Part1Component } from './components/part1/part1.component';
import { Part2Component } from './components/part2/part2.component';
import { Part3Component } from './components/part3/part3.component';

const appRoutes: Routes = [
  { path: 'part1', component: Part1Component },
  { path: 'part2', component: Part2Component },
  { path: 'part3', component: Part3Component }
];

export default appRoutes;
