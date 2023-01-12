import React,{useState} from 'react'

function ProgressBar() {
    const [star, setStar] = useState(0)
    const handelRating = (e) => {
        setStar(e.target.id)
    }
    return (
        <div className='mt-5 peer-checked:invisible block w-full basis-1/2'>
            {[1, 2, 3, 4, 5].map(i => <i id={i} className={i <= star ? 'fa-solid fa-star' : 'fa-regular fa-star'} key={i} onClick={handelRating}></i>)}

        </div>
    )
}

export default ProgressBar
