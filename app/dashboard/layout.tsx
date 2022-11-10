import Link from 'next/link';
import { use } from 'react';

async function getData() {
  const res = await fetch('http://localhost:3001/products');
  return res.json();
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = use(getData());

  return (
    <div>
      <ul>
        {products?.map((product: any) => (
          <li key={product.id}>
            <Link href={`/dashboard/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
      <section>{children}</section>;
    </div>
  );
}
