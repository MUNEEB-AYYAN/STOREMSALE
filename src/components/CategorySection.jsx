import k1 from '../images/kid.png'
import m1 from '../images/men.png'
import w1 from '../images/w1.png'   


const CategorySection = () => {
    const categories = [
        {
            title:"Men",
            imageUrl:m1
        },
        {
            title:"Women",
            imageUrl:w1
        },
        {
            title:"Kids",
            imageUrl:k1
        }
    ]
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
        {categories.map((category,ind)=>{
                return (
                    <>
                    <div key={ind}
                    className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'
                    >
                        <img src={category.imageUrl} 
                        className='w-full h-full object-contain rounded-lg shadow-md '
                        alt="" />
                        <div className='absolute top-20 left-12'>
                            <p className='text-xl font-bold'>{category.title}</p>
                            <p className='text-gray-600'>View All</p>
                        </div>
                    </div>
                    </>
                )
        })}
    </div>
  )
}

export default CategorySection