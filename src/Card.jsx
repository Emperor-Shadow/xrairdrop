const Card = (props) => {
    return (
        <div className="w-full flex justify-between items-center border border-white py-2 my-4 border-b-[#7269E1]">
            <h1 className="lg:text-md text-sm">{props.info.head}</h1>
            <h1 className="lg:text-md text-sm">{props.info.body}</h1>
        </div>
    );
}

export default Card;
