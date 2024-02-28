import { Map } from "@/app/map";

const AppFooter = () => {
    return (
        <>
            <div
                id='fh5co-started'
                className='fh5co-bg'
                style={{
                    backgroundImage: "url(images/img_bg_4.jpg)",
                    opacity: 80,
                }}
            >
                {/* <div className='overlay'></div> */}
                <div className='container'>
                    <div className='row animate-box'>
                        <div className=' text-center fh5co-heading'>
                            <h2>Are You Attending?</h2>
                            <p>
                                Please Fill-up the form to notify you that
                                you&apos;re attending. Thanks.
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row animate-box col-lg-6 d-flex justify-content-end'>
                            <div className=' col-md-offset-1'>
                                <Map />
                            </div>
                        </div>
                        <div className='row animate-box col-lg-6 justify-content-start'>
                            <div className=' col-md-offset-1'>
                                <form className='form-inline'>
                                    <div className='col-md-12 col-sm-12'>
                                        <div className='form-group'>
                                            <label
                                                htmlFor='lat'
                                                className='sr-only text-white'
                                            >
                                                lat
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='lat'
                                                placeholder='lat'
                                                defaultValue={
                                                    "19.954866549373442"
                                                }
                                                readOnly={true}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-sm-12'>
                                        <div className='form-group'>
                                            <label
                                                htmlFor='lng'
                                                className='sr-only text-white'
                                            >
                                                lng
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='lng'
                                                placeholder='lng'
                                                defaultValue={
                                                    "105.33067468198267"
                                                }
                                                readOnly={true}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-sm-12'>
                                        <div className='form-group'>
                                            <label
                                                htmlFor='address'
                                                className='sr-only text-white'
                                            >
                                                Địa chỉ:
                                            </label>
                                            <textarea
                                                className='form-control'
                                                name='address'
                                                id=''
                                                cols={30}
                                                rows={3}
                                                readOnly={true}
                                                defaultValue={
                                                    "Làng Hạ, Xã Phùng Minh, Ngọc Lặc, Thanh Hóa"
                                                }
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppFooter;
