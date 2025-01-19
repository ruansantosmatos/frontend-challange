import Image from "next/image";
import styles from '@/components/styles/Avatar/avatar.module.css'
import { CSSProperties } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type AvatarProps = {
    src: string | StaticImport,
    alt?: string,
    height?: number | `${number}` | undefined,
    width?: number | `${number}` | undefined,
    style?: CSSProperties | undefined
}

export function Avatar({ src, alt = 'Avatar', style, width = 50, height = 50 }: AvatarProps) {
    return (
        <div>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={style}
                className={styles.avatar}
            />
        </div>
    );
}