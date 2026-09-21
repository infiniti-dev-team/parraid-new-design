import Link from 'next/link'
import React from 'react'

const SingleButton = ({ link, txt, whitebg, mAuto }) => {
    return (
        <Link href={link} target={txt === "Event Website" ? "_blank" : "_self"} className={`${mAuto ? "m-auto" : "s"} ${whitebg ? "singleBtn whitebg" : "singleBtn"}`} >
            {txt ? txt : "Let’s Connect"}
        </Link >
    )
}

export default SingleButton