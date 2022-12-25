import { useState } from 'react';
import queryString from 'query-string';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');

    const [errors, setErrors] = useState({
        name: "",
        author: "",
        content: ""
    })



    const submit = () => {

        let validationErrors = {
            name: "",
            author: "",
            content: "",
        }

        if (!name?.trim()) {
            validationErrors.name = "Təbrik edilən kimdir? 👀"
        }
        if (!author?.trim()) {
            validationErrors.author = "Bəs sən kimsən? 😊"
        }
        if (!content?.trim()) {
            validationErrors.content = "Təbrik yazmağı unutdun? 😅"
        }

        setErrors(validationErrors)

        if (Object.values(validationErrors).find(x => x)) {
            toast.error("Oppss, nəsə düz getmədi :)")
            return
        }

        const link = queryString.stringifyUrl({
            url: "http://localhost:3000/",
            query: {
                "name": name,
                "author": author,
                "content": content,
            }
        })

        setUrl(link)

        Swal.fire({
            title: 'Hazırdır :)',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
            `,
            html: `<a href="${link}" target="_blank">${link.slice(0, 36)}...</a>`,
            icon: 'success',
            confirmButtonText: 'Linki kopyala',
            confirmButtonColor: "#28a745"
        }).then(value => {
            if (value.isConfirmed) {
                navigator.clipboard.writeText(link);
                toast.success("Hazırdır! Göndərə bilərsən :)")
            }
        })
    }

    const clearForm = () => {
        setName('')
        setAuthor('')
        setContent('')
        setErrors({
            name: "",
            author: "",
            content: ""
        })
    }

    return (
        <div className='container relative z-10'>
            <div className='mt-[50px] lg:mt-[135px] grid lg:grid-cols-2 lg:gap-4'>
                <div className='mb-[50px] text-center lg:text-left lg:mt-6 lg:mb-0'>
                    <h1 className='text-2xl lg:text-3xl bg-green text-primary-white font-semibold py-2 px-4 mb-8 rounded-md inline-block'>
                        Yeni ilin mübarək!
                    </h1>
                    <p className='text-primary-white text-2xl lg:text-4xl leading-10 font-semibold'>
                        Sevdiklərini təbrik et və bayramı daha əyləncəli yaşa!
                    </p>
                </div>
                <div className='lg:px-12 pb-5'>
                    <div className='bg-primary-white px-8 py-6 rounded-md'>
                        <div className='pt-5'>
                            <div className='mb-6'>
                                <label
                                    htmlFor="name"
                                    className='font-semibold block mb-2'
                                >
                                    Başlıq
                                </label>
                                <input
                                    id='name'
                                    className='w-full border-2 py-2 px-4 border-gray-200 rounded-md outline-none focus:border-gray-300'
                                    placeholder="Məs.: Əzizim John!"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                {
                                    errors.name &&
                                    <span className='text-red-600'>* {errors.name}</span>
                                }
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor="author"
                                    className='font-semibold block mb-2'
                                >
                                    Təbrik edən
                                </label>
                                <input
                                    id='author'
                                    className='w-full border-2 py-2 px-4 border-gray-200 rounded-md outline-none focus:border-gray-300'
                                    placeholder="Məs.: Dostun Akif!"
                                    value={author}
                                    onChange={e => setAuthor(e.target.value)}
                                />
                                {
                                    errors.author &&
                                    <span className='text-red-600'>* {errors.author}</span>
                                }
                            </div>
                            <div className='mb-6'>
                                <label
                                    htmlFor="name"
                                    className='font-semibold block mb-2'
                                >
                                    Məzmun
                                </label>
                                <textarea
                                    id='name'
                                    className='w-full border-2 py-2 px-4 border-gray-200 rounded-md outline-none focus:border-gray-300'
                                    placeholder="Məs.: Yeni ilin mübarək!"
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                />
                                {
                                    errors.content &&
                                    <span className='text-red-600'>* {errors.content}</span>
                                }
                            </div>
                            <button
                                className='bg-green w-full py-4 px-6 text-primary-white text-xl font-semibold'
                                onClick={submit}
                            >
                                Tamamla
                            </button>
                            {
                                url &&
                                <button
                                    className='w-full py-2 px-6 mt-3 text-gray-700 border-2 border-gray-200 font-semibold'
                                    onClick={clearForm}
                                >
                                    Sıfırla
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default HomePage