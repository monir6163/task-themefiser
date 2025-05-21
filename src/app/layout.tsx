import AppContextProvider from '@/context/GlobalContext';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import '../style/globals.css';

//Dynamic imports for client-side only components
const DynamicAOSInit = dynamic(() =>
  import('../providers/AOSProvider').then((mod) => mod.AOSInit)
);
const DynamicToastProvider = dynamic(
  () => import('../providers/ToastProvider')
);

export const metadata: Metadata = {
  title: 'Portfolio | ThemeFisher',
  description:
    ' A simple portfolio template built with Next.js and Tailwind CSS.The task was given to me by ThemeFisher.',
  keywords:
    'Next.js, Tailwind CSS, Portfolio, Responsive Design, Web Development',
  authors: [
    {
      name: 'ThemeFisher',
      url: 'https://themefisher.com/',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="bg-common-black text-white"
      >
        <DynamicAOSInit />
        <DynamicToastProvider />
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
