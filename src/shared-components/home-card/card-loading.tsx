import React from "react";
import Skeleton from '@mui/material/Skeleton';

import './styles.scss'

const HomeCardLoading = () => {

    return <>{Array(9
    ).fill(5).map((item, index) => <div
        key={`home-loading${index}`}
        className={`card skeleton`}>
        <Skeleton className={'sk image'}
                  animation="wave"
                  variant="rectangular"/>
        <div className={'text-container'}>
            <Skeleton className={'sk card-padding'}
                      variant="rectangular"
                      width={80}
                      height={16}/>
            <Skeleton className={'sk card-padding'}
                      variant="rectangular"
                      width={80}
                      height={16}/>
            <Skeleton className={'sk'} width={80}/>
            <Skeleton className={'sk'} width={80}/>
            <Skeleton className={'sk'} width={60}/>
        </div>
        <p className={'published'}>
            <Skeleton className={'sk'} width={80}/>
        </p>
    </div>)
    }
    </>
}

export default HomeCardLoading
