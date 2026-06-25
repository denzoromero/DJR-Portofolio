


const LabelWithLogo = ({detail}) => {
    const { icon: Icon, labelName, labelValue } = detail;
    return (
        <>
            <div className='flex flex-row gap-4 items-center'>
                <Icon color='#cd1c18' size={25}/>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-300'>
                        {labelName}
                    </span>
                    <span className='font-base text-md text-yellow-200'>
                        {labelValue}
                    </span>
                </div>
            </div>
        </>
    );
}

export default LabelWithLogo;