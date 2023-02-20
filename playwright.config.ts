import { PlaywrightTestConfig } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import devices from '@playwright/test';



const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 5 * 1000,
  expect: {
    timeout: 10000
  },
 
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

    reporter: [['html'], ['allure-playwright', {outputFolder:'allure-results'}]],
 
    use: {
        trace: 'on-first-retry',
        video: 'on-first-retry',
        screenshot: 'on'
    },

  /* Configure projects for major browsers */
  projects: [
    {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
    },

  ],

};

export default defineConfig({
    fullyParallel: true,
});
