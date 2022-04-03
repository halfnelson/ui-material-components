import { registerNativeViewElement } from 'svelte-native/dom';
import { BottomNavigationBar, BottomNavigationTab } from '../bottomnavigationbar';

export default class BottomNavigationBarPlugin {
    static register() {
        registerNativeViewElement('mdBottomNavigationBar', () => BottomNavigationBar);
        registerNativeViewElement('mdBottomNavigationTab', () => BottomNavigationTab);
    }
}

