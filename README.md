# webpack-dev-server-repo
A reproduction showing the breaking change in v5.2.3

## TypeScript Error in v5.2.3

Running the project with `webpack-dev-server` **v5.2.3** produces the following TypeScript compilation error:

```
src/index.ts:16:31 - error TS2345: Argument of type 'DevServerConfiguration | undefined' is not assignable to parameter of type 'Configuration<Application, Server<typeof IncomingMessage, typeof ServerResponse>>'.
  Type 'undefined' is not assignable to type 'Configuration<Application, Server<typeof IncomingMessage, typeof ServerResponse>>'.

16   return new WebpackDevServer(config.devServer, compiler);
                                 ~~~~~~~~~~~~~~~~


Found 1 error in src/index.ts:16
```

Running the same code with **v5.2.2** compiles successfully.
