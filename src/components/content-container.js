import TopNavigation from "@/components/top-navigation";

const ContentContainer = ({children}) => {
    return (
        <div className='content-container'>
            <TopNavigation />
            {children}
        </div>
    );
};

export default ContentContainer;
