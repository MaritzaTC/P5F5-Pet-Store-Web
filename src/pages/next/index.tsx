
import MainLayout from '../MainLayout';
import { TextRegular10,} from '@/app/components/atoms/Titles';
import Link from 'next/link';
import { ButtonRounded4 } from '@/app/components/atoms/Buttons';
import { DeleteIcon } from '@/app/components/atoms/Icons';



export default function Page() {
  return <MainLayout>
   <div>
     <div className="flex items-center justify-center min-h-screen">
      <div className="text-center space-y-4">
        <div className='flex items-center justify-center gap-4 mb-4'>
  <DeleteIcon icon='tabler:hammer'></DeleteIcon>
    <DeleteIcon icon='tabler:home-2'></DeleteIcon>
        </div>
   
<TextRegular10 text="Vista en construcción 🚧" />
<TextRegular10 text="Disculpa las molestias, estamos trabajando en ello." />

        <Link href={'/adminfunctions'}>
        <ButtonRounded4 text="Ir a la página principal" />
        </Link>
      </div>
    </div>
   </div>
  </MainLayout>;
}

