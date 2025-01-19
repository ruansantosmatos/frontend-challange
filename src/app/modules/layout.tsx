'use client'
import { Dropdown } from '@/components/Dropdown';
import styles from '@/styles/layout-modules.module.css'
import { useRouter } from 'next/navigation';
import { clearStorageSession } from '../action';
import { Avatar } from '@/components/Avatar';
import ImgAvatar from '../../../public/user.png'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    const router = useRouter()

    async function logOut() {
        await clearStorageSession()
        router.push('/')
    }

    return (
        <div>
            <header className={styles.container}>
                <Dropdown.Root>
                    <Dropdown.Trigger>
                        <Avatar src={ImgAvatar} alt='Avatar' />
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Button>suporte</Dropdown.Button>
                        <Dropdown.Button>conta</Dropdown.Button>
                        <Dropdown.Button onActive={() => logOut()}>
                            sair
                        </Dropdown.Button>
                    </Dropdown.Content>
                </Dropdown.Root>
            </header>
            <section className={styles.content}>
                {children}
            </section>
        </div>
    );
}
