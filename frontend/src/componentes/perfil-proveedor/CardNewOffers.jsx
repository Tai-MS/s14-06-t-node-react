import './perfil-proveedor.css';
import imageCardProfileProvider from '/images/imageCardProfileProvider.svg';
export const CardNewOffers=({title,textMessage})=>{

    return (
        <div className="w-[95%] flex justify-center bordes font-official rounded-xl my-4">
            <section className="w-[95%] my-3 mx-3 ">
                <h3 className='font-semibold text-[1rem] text-[#86B282]'>{title}</h3>
                <p className='text-[14px] font-normal'>{textMessage}</p>
            </section>
            <section className='w-[20%]'>
                <img src={imageCardProfileProvider} alt="image" className='w-full h-auto' />
            </section>
        </div>
    )
}