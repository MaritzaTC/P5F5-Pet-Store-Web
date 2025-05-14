import Navbar from '@/app/components/molecules/Navbar/index';
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
         <Navbar></Navbar>
      <main>{children}</main> 
     
    </div>
  );
};

export default MainLayout;
