import React from 'react'
import { Link } from 'react-router-dom';

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
                            <img class="d-block w-100" src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/h1-rev-img-1.jpg" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/h1-rev-img-2.jpg" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/h1-rev-img-3.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <Link to="#carouselExampleIndicators" class="carousel-control-prev" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </Link>
                    <Link to="#carouselExampleIndicators" class="carousel-control-next" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </Link>
                </div>

                {/* <div className='columns-2 md:columns-4 text-center px-8 mt-4'>
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
                </div> */}

            </div>
            <div className="container">
                <div className='mt-16'>
                    <h6 className='text-gray-500 text-center text-xs'>DUNKER COLLECTION</h6>
                    <h2 className='text-black text-center font-bold text-5xl'>FEATURED PRODUCTS</h2>
                </div>
                <div id="collection" className='px-4 mt-4 flex justify-center'>
                    <div id="product" className='w-72 border-gray-300 rounded p-4'>
                        <div class="card">
                            <img class="card-img-top" src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-filter-1-800x975.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-brand">KICKZ</h5>
                                    <h2 class="card-title">WHITE SHIRT</h2>
                                    <h5 class="card-category">FITNESS</h5>
                                    <p class="card-price">45$</p>
                                    <a href="#" class="btn btn-primary">Add to Card</a>
                                </div>
                        </div>
                    </div>
                    <div id="product" className='w-72 border-gray-300 rounded p-4'>
                    <div class="card">
                            <img class="card-img-top" src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-filter-1-800x975.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 className="card-brand text-xs">KICKZ</h5>
                                    <h2 className="card-title text-xl">WHITE SHIRT</h2>
                                    <h5 className="card-category text-s">FITNESS</h5>
                                    <p className="card-price text-xl">45$</p>
                                    <a href="#" class="btn btn-primary">Add to Card</a>
                                </div>
                        </div>
                    </div>
                    <div id="product" className='w-72 border-gray-300 rounded p-4'>
                    <div class="card">
                            <img class="card-img-top" src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-filter-1-800x975.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-brand">KICKZ</h5>
                                    <h2 class="card-title">WHITE SHIRT</h2>
                                    <h5 class="card-category">FITNESS</h5>
                                    <p class="card-price">45$</p>
                                    <a href="#" class="btn btn-primary">Add to Card</a>
                                </div>
                        </div>
                    </div>
                    <div id="product" className='w-72 border-gray-300 rounded p-4'>
                    <div class="card">
                            <img class="card-img-top" src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-filter-1-800x975.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-brand">KICKZ</h5>
                                    <h2 class="card-title">WHITE SHIRT</h2>
                                    <h5 class="card-category">FITNESS</h5>
                                    <p class="card-price">45$</p>
                                    <a href="#" class="btn btn-primary">Add to Card</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}