import NotFoundImage from "./../assets/notfound.png";

const NotFound = () => {
    return (
        <div>
            <div className="">
                <img src={NotFoundImage} className="object-contain h-[500px] w-[1000px] mt-10 m-auto"/>
                <div className="font-bold text-2xl text-center mx-6">
                    Uh oh... seems like you've reached a page that doesn't exist!
                </div>
            </div>
        </div>
    );
};

export default NotFound;