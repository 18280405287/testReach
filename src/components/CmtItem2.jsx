import React from 'react'

import styles from '@/components/styles'
import cssobj from '@/css/cmtItem.scss'

export default function CmtItem2(props) {
    return (
    <div className={cssobj.cmtbox}>
        <h1 className={cssobj.title}>评论人:{props.user}</h1>
        <p className={cssobj.content}>评论内容:{props.content}</p>
    </div>
    );
};