import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';

function ContentPage() {

    const location = useLocation();
    const query = queryString.parse(location.search);

    const message = {
        name: "Hey, sən!",
        author: "Hörmətlə, Pərvin Paşazadə!",
        content: "2023 sənə bol uğur, əyləncə, xoşbəxtlik və ən əsas can sağlığı gətirsin! Bu il də arzuların üçün çox çalış və onları əldə etməyə biraz daha yaxınlaş."
    }

    return (
        <div className='container relative z-10'>
            <div className='mt-[50px] lg:mt-[200px] lg:max-w-[1100px]'>
                <div>
                    <h1 className='text-2xl lg:text-3xl bg-green text-primary-white font-semibold py-2 px-4 mb-8 rounded-md inline-block'>
                        {
                            query?.name ? query.name
                                :
                                message.name
                        }
                    </h1>
                    <p className='text-primary-white text-2xl lg:text-3xl leading-10 font-semibold'>
                        {
                            query?.content ? query.content
                                :
                                <>
                                    {message.content}
                                    <br />
                                    <>
                                        Bayram təbrikinlə hər kəsi sevindir. Yeni ilin mübarək!
                                        <br />
                                        <Link
                                            to="/form"
                                            className="bg-green text-primary-white font-semibold py-2 px-4 mt-4 mb-8 rounded-md inline-block"
                                        >
                                            Təbrik et
                                        </Link>
                                    </>
                                </>
                        }
                    </p>
                    <p className='text-primary-white text-2xl my-4 lg:my-6'>
                        - {
                            query?.author ? query?.author
                                :
                                <>
                                    Hörmətlə, <a href="https://www.linkedin.com/in/pervin-pashazade-b8384118b/" target="_blank">Pərvin Paşazadə</a>!
                                </>
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContentPage