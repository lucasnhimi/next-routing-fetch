import NavLink from './nav-link';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='bg-gray-800 text-gray-100'>
      <head></head>
      <body>
        <header className='border-b p-4'>
          <nav className='space-x-4'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/dashboard'>Dashboard</NavLink>
          </nav>
        </header>
        <main className='p-4'>{children}</main>
      </body>
    </html>
  );
}
