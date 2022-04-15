import MyApp from './app';

const startApp = async (): Promise<void> => {
  // create routes and such
  // await initialize();
  const app = new MyApp();
  document.body.appendChild(app.stage.getCanvas());
};

try {
  void startApp();
} catch (error) {
  console.error(error);
}