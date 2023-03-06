import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const NamesList = dynamic(() => import('@/components/NamesList'), {
  loading: () => <>Loading</>
});
const SideNav = dynamic(() => import('@/components/SideNav'), {
  loading: () => <>Loading</>
});
const Chat = dynamic(() => import('@/components/Chat'), {
  loading: () => <>Loading</>
});
const Notes = dynamic(() => import('@/components/Notes'), {
  loading: () => <>Loading</>
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <SideNav />
      <NamesList />
      <Chat />
      <Notes />
    </main>
  );
}
