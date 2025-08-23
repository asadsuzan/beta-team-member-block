import React from 'react'

const Social = ({ member }) => {
    return <>

        {
            member?.isShowSocial && <div className="socials">

                {
                    member.social.map((item, idx) => {
                        return <>
                            {

                                item?.isShow && <a
                                    href={item.url}
                                    target={item?.isOpenNewTab ? "_blank" : "_self"}
                                    rel={item?.isOpenNewTab ? "noreferrer" : undefined}
                                    key={idx}
                                    className="link"
                                >



                                    {
                                        item?.icon && <span className='icon' dangerouslySetInnerHTML={{ __html: item?.icon }}></span>
                                    }




                                </a>


                            }

                        </>
                    })
                }

            </div>
        }

    </>
}

export default Social