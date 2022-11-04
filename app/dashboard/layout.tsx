export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='p-4 border'>Layout Dash</div>
      <section>{children}</section>;
    </div>
  );
}
