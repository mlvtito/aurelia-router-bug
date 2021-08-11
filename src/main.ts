import Aurelia, {RouterConfiguration} from 'aurelia';
import {AnotherSubContent} from './another-sub-content';
import {FirstMenu} from './first-menu';
import {FirstSubMenu} from './first-sub-menu';
import {MyApp} from './my-app';
import {SecondMenu} from './second-menu';
import {SecondSubMenu} from './second-sub-menu';

Aurelia
    .register(RouterConfiguration)
    .register(FirstMenu, SecondMenu)
    .register(FirstSubMenu, SecondSubMenu, AnotherSubContent)
    .app(MyApp)
    .start();
