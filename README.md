# APP_INITIALIZER

 The APP_INITIALIZER is an instance of InjectionToken. It is a built in Injection token provided by Angular.

The Angular will execute the function provided by this token when the application loads. If the function returns the promise, then the angular will wait until the promise is resolved. This will make it ideal place to perform some initialization logic before the application is initialized.


declare in  module file
```js
  providers: [{ provide: APP_INITIALIZER, useFactory: InitializeApp, deps: [ConfigService], multi: true }],
  ```


'configService.load()' returns promise type, either resolve to continue the execution or stop in the case of reject

```js
  export function InitializeApp(configService: ConfigService): () => Promise<any> {
  return () => configService.load();
}
```

