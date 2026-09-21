import Link from "next/link";
import styles from '@/styles/news/pressdetails.module.scss'


const RecentPress = ({ data }) => {
    return (
        <ul>
            {data.map((item, index) => (
                <li key={index}>
                    <Link href={`/press-release/${item.slug}`}>
                        <h6>{item.title}</h6>
                        <p>{item.subtitle}</p>
                        <div className={styles.date}>{item.date}</div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default RecentPress