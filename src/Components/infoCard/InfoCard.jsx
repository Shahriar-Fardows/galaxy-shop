import car from '../../assets/icon/car.gif';
import card from '../../assets/icon/card.gif';
import gift from '../../assets/icon/gift.gif';
const InfoCard = () => {
    return (
        <div className="container mx-auto my-16 grid lg:grid-cols-3 justify-center gap-5">
            <div className=' flex items-center gap-5 px-5 border-r-4 border-gray-500'>
                <div>
                    <img className="w-12 h-12" src={car} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl my-2'>Free Shipping</h1>
                    <p>Free shipping for order over $250</p>
                </div>
            </div>
            <div className=' flex items-center gap-5 px-5 border-r-4 border-gray-500'>
                <div>
                    <img className="w-12 h-12" src={card} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl my-2'>Flexible Payment</h1>
                    <p>Easy and secure payment system</p>
                </div>
            </div>
            <div className=' flex items-center gap-5 px-5  border-r-4 border-gray-500'>
                <div>
                    <img className="w-12 h-12" src={gift} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl my-2'>Earn Point</h1>
                    <p>Shop more and earn points</p>
                </div>
            </div>
            

        </div>
    );
};

export default InfoCard;