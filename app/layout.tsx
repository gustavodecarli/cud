import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';

import './globals.css';
//import { AppDataSource } from '../data-source';
import Loading from './loading';
import Main from './main';
import Nav from './nav';
import Toast from './toast';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense fallback={<Loading />}>
          <Nav />
        </Suspense>
        <Main>{children}</Main>
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}
