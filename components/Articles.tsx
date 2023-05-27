import React from 'react'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/DateComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Articles = ({ postData }) => {
    return (
        <article className={utilStyles.articlePadding}>
            <aside>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    {postData.map(({ id, date, title, thumbnail }) => (
                        <Link className={utilStyles.articleLink} href={`/posts/${id}`} key={id}>
                            <dl className={utilStyles.articleDl}>
                                <dt className={utilStyles.articleDt}>
                                    <img className={utilStyles.thumbnail} src={thumbnail} />
                                </dt>
                                <dd className={`${utilStyles.listItem}} ${utilStyles.articleDd} text-dark`} key={id}>
                                    {title}
                                    <br />
                                    <small className={`${utilStyles.lightText} ${utilStyles.publishDate}`}>
                                        <FontAwesomeIcon className={utilStyles.calenderIcon} icon={faCalendarDays} />
                                        <Date dateString={date} />
                                    </small>
                                </dd>
                            </dl>
                        </Link>
                    ))}
                </section>
            </aside>
        </article>
    )
}

export default Articles
