import Navbar from '@/app/components/molecules/Navbar/index';
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen min-h-screen overflow-x-hidde'>
         <Navbar></Navbar>
      <main className='w-full'>{children}</main> 
    </div>
  );
};

export default MainLayout;
