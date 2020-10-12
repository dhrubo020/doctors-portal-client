import React from 'react';
import patient1 from '../../../images/Ellipse 1.png'
import patient2 from '../../../images/Ellipse 2.png'
import BlogCard from './BlogCard';
import OurBlogStyle from './OurBlogStyle.css'

const OurBlog = () => {
    const news = [
        {
            img: patient1,
            name: 'Dr. Caudi',
            date: '23 April 2019',
            title: '2 times of brush in a day can Keep you healthy',
            description: 'It is a long established fact that by the readable content of a lot layout. The point'
        },
        {
            img: patient2,
            name: 'Dr. John Mitchel',
            date: '23 April 2019',
            title: 'The tooth cancer is taking a challenge',
            description: 'It is a long established fact that by the readable content of a lot layout. The point noticed.'
        }
    ]
    return (
        <div>
            <section className="services-container ">
                <div className="text-center">
                    <h5 style={{ color: '#1CC7C1' }}>Our Blog</h5>
                    <h2 style={{ color: '#3A4256' }} className="font-weight-bold">From Our Blog News</h2>
                </div>

                <div className="d-flex justify-content-center ">
                    <div className="row mt-5 pt-3">
                        <div className="col-md-4">
                            <div className="card card-blog  text-white" >
                                <div className={`d-flex py-5 px-2`}>
                                    <div>
                                        <h6>Rashed Kabir</h6>
                                        <small>23 April 2019</small>
                                    </div>
                                </div>
                                <div className="card-body px-2">
                                    <p>Check at least a doctor in a year for your teeth.</p>
                                    <span className="ml-3"> <i class="fas fa-long-arrow-alt-right"></i> </span>
                                </div>
                            </div>
                        </div>
                        {
                            news.map((each,index) => <BlogCard key={index} data={each} />)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurBlog;