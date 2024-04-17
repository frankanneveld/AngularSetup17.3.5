import { ApplicationConfig, isDevMode } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore, ActionReducerMap } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const routes: Routes = [];

/**
 * @description Redux Devtools plugin for chrome See: {@link https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd}
 */
const devToolsConfig = {
    maxAge: 25,             // Retains last 25 states
    logOnly: !isDevMode(),  // Restrict extension to log-only mode
    autoPause: true,        // Pauses recording actions and state changes when the extension window is not open
    trace: false,           // If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    traceLimit: 75,         // maximum stack trace frames to be stored (in case trace option was provided as true)
    connectInZone: true,    // If set to true, the connection is established within the Angular zone
};

/**
 * @description Application config
 */
export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(),
        provideStore({
            // [fromCounter.featureKey]: fromCounter.counterReducer, // TODO: make reducers
            // [fromTodos.featureKey]: fromTodos.todoReducer,
        } as ActionReducerMap<Record<string, object>>),
        provideEffects({
            // [fromTodos.featureKey]: fromTodos.loadAgendaTodosFunctional, // TODO: make effects
        }),
        provideStoreDevtools({ ...devToolsConfig }),
    ],
};
