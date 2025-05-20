import FormRegister from '@/app/components/organisms/RegisterForm/index';
import MainLayout from '../MainLayout';
import CreatePromotion from '@/app/components/organisms/CreatePromotion';

export default function Page() {
  return <MainLayout>
      <CreatePromotion></CreatePromotion>
  </MainLayout>;
}

