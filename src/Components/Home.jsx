import React from 'react'

export default function Home() {
    return (
        <>
            <div className="mx-auto w-full z-0">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://krisshlok.shop/wp-content/uploads/2022/08/slider-7.jpg" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://krisshlok.shop/wp-content/uploads/2022/08/slider-7.jpg" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://krisshlok.shop/wp-content/uploads/2022/08/slider-7.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div className='columns-2 md:columns-4 text-center px-8 mt-4'>
                    <div className='w-auto mx-2 '>
                        <img src="https://krisshlok.shop/wp-content/uploads/2022/12/3.png" className='rounded-lg drop-shadow-lg transition transform hover:-translate-y-4' alt="mukutpagdi" />
                        <div className='bg-[#A3E635] uppercase py-2 rounded'>Mukut Pagdi</div>
                    </div>
                    <div className='w-auto mx-2'>
                        <img src="https://krisshlok.shop/wp-content/uploads/2022/12/2.png" className='rounded-lg drop-shadow-lg transition transform hover:-translate-y-4' alt="mukutpagdi" />
                        <div className='bg-[#A3E635] uppercase py-2 rounded'>Dress Poshak</div>
                    </div>
                    <div className='w-auto mx-2'>
                        <img src="https://krisshlok.shop/wp-content/uploads/2022/12/4.png" className='rounded-lg drop-shadow-lg transition transform hover:-translate-y-4' alt="mukutpagdi" />
                        <div className='bg-[#A3E635] uppercase py-2 rounded'>Pooja Items</div>
                    </div>
                    <div className='w-auto mx-2'>
                        <img src="https://krisshlok.shop/wp-content/uploads/2022/12/1.png" className='rounded-lg drop-shadow-lg transition transform hover:-translate-y-4' alt="mukutpagdi" />
                        <div className='bg-[#A3E635] uppercase py-2 rounded'>Festival Items</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='mt-16'>
                    <h4>NEW ARRIVALS</h4>
                </div>
            </div>
        </>
    );
}