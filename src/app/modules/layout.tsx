'use client'
import { Dropdown } from '@/components/Dropdown';
import styles from '@/styles/layout-modules.module.css'
import { useRouter } from 'next/navigation';
import { clearStorageSession } from '../action';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    const router = useRouter()

    async function logOut(){
        await clearStorageSession()
        router.push('/')
    }

    return (
        <div>
            <header className={styles.container}>
                <Dropdown.Root>
                    <Dropdown.Trigger>
                        <button>Dropdown</button>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Button>suporte</Dropdown.Button>
                        <Dropdown.Button>conta</Dropdown.Button>
                        <Dropdown.Button onActive={() => logOut()}>sair</Dropdown.Button>
                    </Dropdown.Content>
                </Dropdown.Root>
            </header>
            <section className={styles.content}>
                {children}
            </section>
        </div>
    );
}
