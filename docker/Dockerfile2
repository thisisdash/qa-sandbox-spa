FROM mcr.microsoft.com/playwright:v1.22.1-focal

COPY . .

RUN npm install

RUN PLAYWRIGHT_BROWSERS_PATH=/root/.cache/ms-playwright/chromium-1005/chrome-linux/chrome npx playwright install chromium

CMD ["npm", "run", "playwright"]